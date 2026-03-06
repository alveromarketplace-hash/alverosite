import { useState, useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            category: "Orders & Shipping",
            questions: [
                {
                    q: "How long does delivery take?",
                    a: "Standard delivery takes 5-7 business days. Express delivery is available for select locations and takes 2-3 business days. Delivery times may vary depending on your location and the vendor."
                },
                {
                    q: "How can I track my order?",
                    a: "Once your order is shipped, you'll receive a tracking link via email and SMS. You can also track your order from your account dashboard under 'My Orders'."
                },
                {
                    q: "Do you offer Cash on Delivery (COD)?",
                    a: "Yes, COD is available for select products and serviceable PIN codes. The availability will be shown at checkout based on your delivery address."
                },
                {
                    q: "What are the shipping charges?",
                    a: "Shipping is free for orders above ₹1,499. For orders below this amount, a flat shipping fee of ₹99 is applicable. Some vendors may have different shipping policies which will be displayed on the product page."
                }
            ]
        },
        {
            category: "Returns & Refunds",
            questions: [
                {
                    q: "What is your return policy?",
                    a: "We offer a 7-day return policy for most products. Items must be unused, unwashed, and in original packaging with all tags attached. Return policies may vary by vendor and are mentioned on each product page."
                },
                {
                    q: "How do I initiate a return?",
                    a: "Go to 'My Orders' in your account, select the item you wish to return, and click 'Return Item'. Fill in the reason and schedule a pickup. Our courier partner will collect the item from your address."
                },
                {
                    q: "When will I receive my refund?",
                    a: "Refunds are processed within 5-7 business days after the returned product is received and inspected. The amount will be credited to your original payment method."
                },
                {
                    q: "Can I exchange a product?",
                    a: "Yes, exchanges are available for size and color variations subject to stock availability. You can request an exchange from your order details page within 7 days of delivery."
                }
            ]
        },
        {
            category: "Products & Quality",
            questions: [
                {
                    q: "Are all products original?",
                    a: "Yes, all products on ALVERO are sourced directly from verified vendors. We ensure quality checks and authenticity for every listing on our platform."
                },
                {
                    q: "How do I find my size?",
                    a: "Each product page has a detailed size guide. Measure yourself and compare with the size chart provided by the vendor. If you're between sizes, we recommend going for the larger size."
                },
                {
                    q: "What if the product is different from the image?",
                    a: "While we strive for accuracy, slight color variations may occur due to screen settings. If the product is significantly different, you can return it within 7 days for a full refund."
                }
            ]
        },
        {
            category: "Payments",
            questions: [
                {
                    q: "What payment methods do you accept?",
                    a: "We accept Credit/Debit Cards (Visa, Mastercard, RuPay), UPI (Google Pay, PhonePe, Paytm), Net Banking, and Cash on Delivery for eligible orders."
                },
                {
                    q: "Is my payment information secure?",
                    a: "Absolutely. All transactions are encrypted using SSL technology. We don't store your card details on our servers. Payments are processed through secure, PCI-compliant payment gateways."
                },
                {
                    q: "Why was my payment declined?",
                    a: "Payments may be declined due to insufficient funds, incorrect card details, or bank security measures. Please check your details and try again, or contact your bank for assistance."
                }
            ]
        },
        {
            category: "Account & Vendors",
            questions: [
                {
                    q: "How do I become a vendor on ALVERO?",
                    a: "Click on 'Become a Vendor' and fill out the application form with your business details. Our team will review your application and get back to you within 3-5 business days."
                },
                {
                    q: "How do I reset my password?",
                    a: "Click on 'Forgot Password' on the login page, enter your registered email, and follow the link sent to your inbox to reset your password."
                },
                {
                    q: "How do I contact customer support?",
                    a: "You can reach us via email at support@alvero.com, call us at +91-XXXXXXXXXX, or use the contact form on our Contact page. We're available 24/7 to help you."
                }
            ]
        }
    ];

    const toggleFAQ = (categoryIndex, questionIndex) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <div className="faq-page">
            <div className="faq-hero">
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about orders, shipping, returns, and more.</p>
            </div>

            <div className="faq-content">
                {faqs.map((category, catIndex) => (
                    <div className="faq-category" key={catIndex}>
                        <h2 className="faq-category-title">{category.category}</h2>
                        <div className="faq-list">
                            {category.questions.map((faq, qIndex) => {
                                const isOpen = openIndex === `${catIndex}-${qIndex}`;
                                return (
                                    <div
                                        className={`faq-item ${isOpen ? 'open' : ''}`}
                                        key={qIndex}
                                    >
                                        <button
                                            className="faq-question"
                                            onClick={() => toggleFAQ(catIndex, qIndex)}
                                        >
                                            <span>{faq.q}</span>
                                            <svg
                                                className={`faq-icon ${isOpen ? 'rotate' : ''}`}
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="faq-contact-cta">
                    <h3>Still have questions?</h3>
                    <p>Can't find the answer you're looking for? Our support team is here to help.</p>
                    <a href="/contact" className="faq-contact-btn">Contact Support</a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
