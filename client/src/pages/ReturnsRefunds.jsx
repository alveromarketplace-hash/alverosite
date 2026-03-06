import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReturnsRefunds.css';

const ReturnsRefunds = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="returns-page">
            <div className="returns-hero">
                <h1>Returns & Refunds</h1>
                <p>Hassle-free returns within 30 days</p>
            </div>

            <div className="returns-content">
                <section className="returns-intro">
                    <p>
                        We want you to love every purchase. If something isn't quite right,
                        our easy returns process ensures you can shop with complete confidence.
                    </p>
                </section>

                <section className="returns-highlight">
                    <div className="highlight-grid">
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                                </svg>
                            </div>
                            <h3>30-Day Returns</h3>
                            <p>Return any item within 30 days of delivery</p>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="1" y="3" width="15" height="13"></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                </svg>
                            </div>
                            <h3>Free Return Shipping</h3>
                            <p>On orders over $149 within India</p>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <h3>Quick Refunds</h3>
                            <p>Processed within 5-7 business days</p>
                        </div>
                    </div>
                </section>

                <section className="returns-section">
                    <h2>Return Policy</h2>
                    <div className="policy-block">
                        <h3>Eligible Items</h3>
                        <ul>
                            <li>Unworn items with original tags attached</li>
                            <li>Items in original packaging</li>
                            <li>Items returned within 30 days of delivery</li>
                            <li>Defective or damaged items (report within 48 hours)</li>
                        </ul>
                    </div>

                    <div className="policy-block">
                        <h3>Non-Returnable Items</h3>
                        <ul>
                            <li>Undergarments and swimwear (for hygiene reasons)</li>
                            <li>Personalized or customized items</li>
                            <li>Items marked as "Final Sale"</li>
                            <li>Gift cards</li>
                            <li>Items showing signs of wear, wash, or alteration</li>
                        </ul>
                    </div>
                </section>

                <section className="returns-section">
                    <h2>How to Return</h2>
                    <div className="return-steps">
                        <div className="return-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Initiate Return Request</h4>
                                <p>
                                    Log into your account and go to <Link to="/orders">Order History</Link>.
                                    Select the item you wish to return and click "Request Return".
                                </p>
                            </div>
                        </div>
                        <div className="return-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Select Return Reason</h4>
                                <p>
                                    Choose the reason for your return. This helps us improve our products
                                    and services.
                                </p>
                            </div>
                        </div>
                        <div className="return-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Pack Your Item</h4>
                                <p>
                                    Pack the item securely in its original packaging. Include all tags,
                                    accessories, and the invoice.
                                </p>
                            </div>
                        </div>
                        <div className="return-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Schedule Pickup or Drop Off</h4>
                                <p>
                                    Choose between free home pickup (available in select cities) or
                                    drop off at the nearest courier partner location.
                                </p>
                            </div>
                        </div>
                        <div className="return-step">
                            <div className="step-number">5</div>
                            <div className="step-content">
                                <h4>Receive Refund</h4>
                                <p>
                                    Once we receive and verify your return, your refund will be processed
                                    within 5-7 business days.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="returns-section">
                    <h2>Refund Methods</h2>
                    <div className="refund-methods">
                        <div className="refund-card">
                            <h3>Original Payment Method</h3>
                            <p>
                                Refunds are credited back to your original payment method
                                (credit/debit card, UPI, net banking).
                            </p>
                            <p className="refund-time">Processing: 5-7 business days</p>
                        </div>
                        <div className="refund-card">
                            <h3>ALVERO Store Credit</h3>
                            <p>
                                Opt for store credit and receive an additional 10% bonus.
                                Store credit never expires.
                            </p>
                            <p className="refund-time">Processing: Instant</p>
                        </div>
                    </div>
                </section>

                <section className="returns-section">
                    <h2>Exchanges</h2>
                    <p>
                        Want a different size or color? We make exchanges easy!
                    </p>
                    <div className="exchange-info">
                        <div className="exchange-block">
                            <h3>Same Item Exchange</h3>
                            <p>
                                Exchange for a different size or color of the same item at no extra cost.
                                Subject to availability.
                            </p>
                        </div>
                        <div className="exchange-block">
                            <h3>Different Item Exchange</h3>
                            <p>
                                Return your original purchase and place a new order. Refund will be
                                processed as usual.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="returns-section">
                    <h2>Damaged or Defective Items</h2>
                    <p>
                        If you receive a damaged or defective item, please report it within 48 hours
                        of delivery:
                    </p>
                    <ul className="damage-list">
                        <li>Contact us immediately via email or phone</li>
                        <li>Include photos of the damage and packaging</li>
                        <li>Keep the original packaging until the issue is resolved</li>
                        <li>We'll arrange a free pickup and full refund or replacement</li>
                    </ul>
                </section>

                <section className="returns-section">
                    <h2>International Returns</h2>
                    <div className="international-info">
                        <p>
                            For international orders, returns must be shipped back at the customer's expense
                            unless the item is defective. We recommend using a trackable shipping service.
                        </p>
                        <div className="note">
                            <strong>Note:</strong> Original shipping charges and customs duties are non-refundable.
                        </div>
                    </div>
                </section>

                <section className="returns-contact">
                    <h2>Need Assistance?</h2>
                    <p>Our returns team is ready to help with any questions.</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:returns@alvero.com">returns@alvero.com</a></p>
                        <p><strong>Phone:</strong> +91 1800-123-4567 (Toll-free)</p>
                        <p><strong>Response Time:</strong> Within 24 hours</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReturnsRefunds;
