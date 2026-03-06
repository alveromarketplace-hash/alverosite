import { useEffect } from 'react';
import './PrivacyPolicy.css'; // Reuse the same styling

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <div className="privacy-hero">
                <h1>Terms & Conditions</h1>
                <p>Last updated: January 2026</p>
            </div>

            <div className="privacy-content">
                <section className="privacy-intro">
                    <p>
                        Welcome to ALVERO. These Terms and Conditions ("Terms") govern your access to and use of our
                        website, services, and platform. By accessing or using ALVERO, you agree to be bound by these Terms.
                        If you do not agree, please do not use our services.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>1. Overview</h2>
                    <p>
                        ALVERO is an online marketplace that allows third-party vendors to sell bottom wear and related products.
                        We provide the platform, while vendors are responsible for product listings, shipping, returns, and
                        customer service related to their listings.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>2. User Eligibility</h2>
                    <p>To use our platform, you must:</p>
                    <ul>
                        <li>Be at least 18 years old (or have parental/guardian consent)</li>
                        <li>Provide accurate and complete registration details</li>
                        <li>Use the platform in compliance with applicable laws and regulations</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>3. Orders and Payments</h2>
                    <ul>
                        <li>Once an order is placed, you will receive an email confirmation</li>
                        <li>Payment must be made through our approved payment gateways</li>
                        <li>In case of payment failures, ALVERO is not liable for bank or technical errors</li>
                        <li>Cash on Delivery (COD) is available for select products and serviceable PIN codes</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>4. Product Information</h2>
                    <ul>
                        <li>All products are listed and sold by independent vendors</li>
                        <li>We aim to provide accurate product descriptions and images, but ALVERO does not guarantee the completeness or reliability of all content</li>
                        <li>Product availability and prices are subject to change without notice</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>5. Shipping and Delivery</h2>
                    <ul>
                        <li>Orders are shipped by the respective vendors using third-party logistics partners</li>
                        <li>Delivery times vary based on location and courier partner availability</li>
                        <li>ALVERO is not responsible for delays caused by vendors, courier services, or force majeure events</li>
                        <li>Shipping charges, if any, are mentioned during checkout</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>6. Returns and Refunds</h2>
                    <ul>
                        <li>Return policies vary by seller and are clearly mentioned on each product page</li>
                        <li>Items eligible for return must be unused, in original packaging, and within the specified return period</li>
                        <li>Refunds, where applicable, are processed once the returned product is approved by the seller</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>7. User Responsibilities</h2>
                    <ul>
                        <li>You agree not to misuse the platform (e.g., fake orders, fraudulent returns)</li>
                        <li>You will not upload or transmit harmful or illegal content</li>
                        <li>You are responsible for maintaining the confidentiality of your login credentials</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>8. Intellectual Property</h2>
                    <ul>
                        <li>All content on the ALVERO platform (logo, branding, design, text, etc.) is the intellectual property of ALVERO or its licensors</li>
                        <li>You may not copy, reproduce, or use any content without prior written permission</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>9. Limitation of Liability</h2>
                    <ul>
                        <li>ALVERO is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform</li>
                        <li>We do not guarantee uninterrupted access or error-free service</li>
                        <li>Vendor actions (including delays, misrepresentation, or defective goods) are not the liability of ALVERO</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>10. Account Suspension or Termination</h2>
                    <p>We reserve the right to suspend or terminate any user account for:</p>
                    <ul>
                        <li>Violating these Terms</li>
                        <li>Fraudulent or abusive behavior</li>
                        <li>Legal or security concerns</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>11. Modifications to Terms</h2>
                    <p>
                        ALVERO may update these Terms from time to time. Changes will be posted on this page with an updated
                        effective date. Continued use of the platform after changes means you accept the new Terms.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>12. Governing Law</h2>
                    <p>
                        These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction
                        of the courts in Surat, Gujarat.
                    </p>
                </section>

                <section className="privacy-contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms & Conditions, please contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:legal@alvero.com">legal@alvero.com</a></p>
                        <p><strong>Address:</strong> ALVERO Headquarters, Surat, Gujarat, India</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsConditions;
