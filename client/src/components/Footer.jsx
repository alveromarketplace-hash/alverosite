import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Features Bar */}
            <AnimatedSection className="footer__features">
                <div className="footer__feature">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    <span>Free shipping from $149</span>
                </div>
                <div className="footer__feature delay-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                    </svg>
                    <span>Easy returns within 30 days</span>
                </div>
                <div className="footer__feature delay-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Secure payments online</span>
                </div>
                <div className="footer__feature delay-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>24/7 customer support</span>
                </div>
            </AnimatedSection>

            {/* Main Footer Content */}
            <div className="footer__main">
                {/* Logo Section */}
                <AnimatedSection className="footer__brand">
                    <Link to="/" className="footer__logo-link"><h2 className="footer__logo">ALVERO</h2></Link>
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </AnimatedSection>

                {/* Navigation Links */}
                <div className="footer__nav">
                    <AnimatedSection className="footer__nav-column delay-100">

                        <ul className="footer__nav-list">
                            <li><Link to="/">Index</Link></li>
                            <li><Link to="/products?gender=men">Men</Link></li>
                            <li><Link to="/products?gender=women">Women</Link></li>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/size-guide">Size Guide</Link></li>
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="footer__nav-column delay-200">

                        <ul className="footer__nav-list">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="footer__nav-column delay-300">

                        <ul className="footer__nav-list">
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/shipping">Shipping & Delivery</Link></li>
                            <li><Link to="/returns">Returns & Refunds</Link></li>
                        </ul>
                    </AnimatedSection>
                </div>
            </div>

            {/* Newsletter Section */}
            <AnimatedSection className="footer__newsletter">
                <div className="footer__newsletter-content">
                    <p className="footer__newsletter-text">
                        Subscribe to our newsletter for new arrivals and special offers.
                    </p>
                    <form className="footer__newsletter-form">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="footer__newsletter-input"
                        />
                        <button type="submit" className="footer__newsletter-btn">
                            Submit
                        </button>
                    </form>
                    <p className="footer__newsletter-disclaimer">
                        By subscribing to our newsletter, you agree to receive emails from us and accept our <Link to="/privacy-policy">Privacy Policy</Link>.
                    </p>
                </div>
            </AnimatedSection>

            {/* Payment Methods */}
            <div className="footer__bottom">
                <AnimatedSection className="footer__payments">
                    <span className="footer__payment-icon">VISA</span>
                    <span className="footer__payment-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="8" cy="12" r="6" opacity="0.8" />
                            <circle cx="16" cy="12" r="6" opacity="0.6" />
                        </svg>
                    </span>
                    <span className="footer__payment-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.5 6.5h-11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm-5.5 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        </svg>
                    </span>
                    <span className="footer__payment-icon">G Pay</span>
                    <span className="footer__payment-icon"> Pay</span>
                </AnimatedSection>
            </div>
        </footer>
    );
};

export default Footer;
