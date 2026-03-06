import { useState } from 'react';
import axios from 'axios';
import './Support.css';
import { API_URL } from '../config';

const Support = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Order Issue',
        message: '',
        orderId: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error | null

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                setStatus({ type: 'error', message: 'Please fill in all required fields.' });
                setLoading(false);
                return;
            }

            const messageData = {
                ...formData,
                message: formData.orderId
                    ? `[Order #${formData.orderId}] ${formData.message}`
                    : formData.message
            };

            await axios.post(`${API_URL}/contact`, messageData);

            setStatus({ type: 'success', message: 'Ticket submitted successfully! We will get back to you soon.' });
            setFormData({ name: '', email: '', subject: 'Order Issue', message: '', orderId: '' });
        } catch (error) {
            console.error('Support Error:', error);
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to submit ticket. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const faqs = [
        {
            question: "How do I track my order?",
            answer: "You can track your order by going to 'My Orders' in your profile. Click on the order you want to track to see real-time updates."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all unused items with original tags. Visit our Returns & Refunds page for more details."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to select international countries. Shipping costs and delivery times vary by location."
        },
        {
            question: "How can I change my shipping address?",
            answer: "You can manage your saved addresses in your Profile under the 'Saved Addresses' tab. For orders already placed, please contact support immediately."
        }
    ];

    return (
        <main className="support-page">
            <div className="support-header">
                <h1>Help & Support</h1>
                <p>We're here to help. Check our FAQs or submit a ticket.</p>
            </div>

            <div className="support-grid">
                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    {faq.question}
                                    <span>{activeIndex === index ? '−' : '+'}</span>
                                </div>
                                {activeIndex === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Contact Us / Submit Ticket</h2>
                    <form onSubmit={handleSubmit}>
                        {status && (
                            <div className={`status-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <div className="grid-two-col">
                            <div className="form-group-support">
                                <label>Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input-support"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group-support">
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input-support"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group-support">
                            <label>Subject</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="form-input-support"
                            >
                                <option>Order Issue</option>
                                <option>Payment Problem</option>
                                <option>Product Inquiry</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="form-group-support">
                            <label>Order ID (Optional)</label>
                            <input
                                type="text"
                                name="orderId"
                                value={formData.orderId}
                                onChange={handleChange}
                                className="form-input-support"
                                placeholder="#12345678"
                            />
                        </div>

                        <div className="form-group-support">
                            <label>Message *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea-support"
                                placeholder="Describe your issue detailedly..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-ticket-btn"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Ticket'}
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
                .status-message {
                    padding: 12px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    font-size: 14px;
                }
                .status-message.success {
                    background-color: #d1fae5;
                    color: #065f46;
                    border: 1px solid #a7f3d0;
                }
                .status-message.error {
                    background-color: #fee2e2;
                    color: #991b1b;
                    border: 1px solid #fecaca;
                }
                .grid-two-col {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }
                @media (max-width: 640px) {
                    .grid-two-col {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </main>
    );
};

export default Support;
