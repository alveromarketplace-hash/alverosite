import { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <div className="privacy-hero">
                <h1>Privacy Policy</h1>
                <p>Last updated: January 2026</p>
            </div>

            <div className="privacy-content">
                <section className="privacy-intro">
                    <p>
                        At ALVERO, we respect your privacy and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, and safeguard the data you share when using
                        our website and services.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>1. Information We Collect</h2>
                    <p>We collect the following types of information when you use our platform:</p>

                    <div className="info-block">
                        <h3>a. Personal Information</h3>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Shipping and billing address</li>
                            <li>Payment details (processed securely via third-party gateways)</li>
                        </ul>
                    </div>

                    <div className="info-block">
                        <h3>b. Browsing and Technical Data</h3>
                        <ul>
                            <li>IP address</li>
                            <li>Device information</li>
                            <li>Pages visited</li>
                            <li>Cookies and usage data</li>
                        </ul>
                    </div>
                </section>

                <section className="privacy-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Process and deliver your orders</li>
                        <li>Facilitate communication with sellers</li>
                        <li>Send order updates and promotional emails (with your consent)</li>
                        <li>Improve our website and customer experience</li>
                        <li>Ensure fraud prevention and security</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>3. Sharing Your Information</h2>
                    <p>We do not sell or rent your data to third parties. We may share your information with:</p>
                    <ul>
                        <li>Vendors or sellers to fulfill your orders</li>
                        <li>Courier partners for shipping and tracking</li>
                        <li>Payment gateways for secure transactions</li>
                        <li>Legal authorities, if required by law or for fraud prevention</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>4. Data Security</h2>
                    <p>We implement strong security measures to protect your data, including:</p>
                    <ul>
                        <li>Encrypted payment gateways</li>
                        <li>Secure server infrastructure</li>
                        <li>Limited access to user data within our team</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>5. Cookies</h2>
                    <p>We use cookies to:</p>
                    <ul>
                        <li>Remember your preferences</li>
                        <li>Improve site performance</li>
                        <li>Track usage analytics</li>
                    </ul>
                    <p className="note">You can manage or disable cookies through your browser settings.</p>
                </section>

                <section className="privacy-section">
                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access, update, or delete your personal data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Request a copy of the data we hold on you</li>
                    </ul>
                    <p className="note">
                        To exercise these rights, contact us at <a href="mailto:privacy@alvero.com">privacy@alvero.com</a>
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>7. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party sites (e.g., courier tracking pages).
                        We are not responsible for their privacy practices.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>8. Children's Privacy</h2>
                    <p>
                        Our platform is not intended for use by individuals under the age of 13.
                        We do not knowingly collect data from children.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>9. Policy Updates</h2>
                    <p>
                        We may update this policy from time to time. Changes will be posted here with the updated effective date.
                    </p>
                </section>

                <section className="privacy-contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:privacy@alvero.com">privacy@alvero.com</a></p>
                        <p><strong>Address:</strong> ALVERO Headquarters, Mumbai, India</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
