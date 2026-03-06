import { useEffect } from 'react';
import './ShippingDelivery.css';

const ShippingDelivery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shipping-page">
            <div className="shipping-hero">
                <h1>Shipping & Delivery</h1>
                <p>Everything you need to know about getting your order</p>
            </div>

            <div className="shipping-content">
                <section className="shipping-intro">
                    <p>
                        At ALVERO, we strive to deliver your orders quickly and safely.
                        We partner with trusted courier services to ensure your premium products
                        reach you in perfect condition.
                    </p>
                </section>

                <section className="shipping-section">
                    <h2>Shipping Methods</h2>
                    <div className="shipping-methods">
                        <div className="method-card">
                            <div className="method-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="1" y="3" width="15" height="13"></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                </svg>
                            </div>
                            <h3>Standard Shipping</h3>
                            <p className="method-time">5-7 Business Days</p>
                            <p className="method-price">Free on orders over $149</p>
                            <p className="method-note">$9.99 for orders under $149</p>
                        </div>

                        <div className="method-card featured">
                            <div className="method-badge">Most Popular</div>
                            <div className="method-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <h3>Express Shipping</h3>
                            <p className="method-time">2-3 Business Days</p>
                            <p className="method-price">$14.99</p>
                            <p className="method-note">Free on orders over $299</p>
                        </div>

                        <div className="method-card">
                            <div className="method-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <h3>Next Day Delivery</h3>
                            <p className="method-time">Next Business Day</p>
                            <p className="method-price">$24.99</p>
                            <p className="method-note">Order before 2 PM</p>
                        </div>
                    </div>
                </section>

                <section className="shipping-section">
                    <h2>Delivery Times by Region</h2>
                    <div className="delivery-table-wrapper">
                        <table className="delivery-table">
                            <thead>
                                <tr>
                                    <th>Region</th>
                                    <th>Standard</th>
                                    <th>Express</th>
                                    <th>Next Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Metro Cities</td>
                                    <td>3-5 days</td>
                                    <td>1-2 days</td>
                                    <td>Available</td>
                                </tr>
                                <tr>
                                    <td>Tier 2 Cities</td>
                                    <td>5-7 days</td>
                                    <td>2-3 days</td>
                                    <td>Available</td>
                                </tr>
                                <tr>
                                    <td>Tier 3 Cities</td>
                                    <td>7-10 days</td>
                                    <td>3-5 days</td>
                                    <td>Not Available</td>
                                </tr>
                                <tr>
                                    <td>Remote Areas</td>
                                    <td>10-14 days</td>
                                    <td>5-7 days</td>
                                    <td>Not Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="shipping-section">
                    <h2>International Shipping</h2>
                    <p>We currently ship to select international destinations:</p>

                    <div className="international-grid">
                        <div className="region-block">
                            <h3>North America</h3>
                            <ul>
                                <li>United States - 7-10 days</li>
                                <li>Canada - 7-12 days</li>
                            </ul>
                            <p className="region-price">Starting from $29.99</p>
                        </div>
                        <div className="region-block">
                            <h3>Europe</h3>
                            <ul>
                                <li>United Kingdom - 5-8 days</li>
                                <li>Germany, France - 7-10 days</li>
                                <li>Other EU - 10-14 days</li>
                            </ul>
                            <p className="region-price">Starting from $34.99</p>
                        </div>
                        <div className="region-block">
                            <h3>Asia Pacific</h3>
                            <ul>
                                <li>Singapore - 3-5 days</li>
                                <li>UAE - 4-6 days</li>
                                <li>Australia - 7-12 days</li>
                            </ul>
                            <p className="region-price">Starting from $24.99</p>
                        </div>
                    </div>

                    <p className="note">
                        International orders may be subject to customs duties and taxes,
                        which are the responsibility of the recipient.
                    </p>
                </section>

                <section className="shipping-section">
                    <h2>Order Tracking</h2>
                    <p>Stay updated on your order every step of the way:</p>

                    <div className="tracking-steps">
                        <div className="tracking-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Order Confirmation</h4>
                                <p>You'll receive an email confirmation with your order details</p>
                            </div>
                        </div>
                        <div className="tracking-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Shipped Notification</h4>
                                <p>Once shipped, you'll get a tracking number via email and SMS</p>
                            </div>
                        </div>
                        <div className="tracking-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Real-time Updates</h4>
                                <p>Track your package in real-time through our website or courier's site</p>
                            </div>
                        </div>
                        <div className="tracking-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Delivery</h4>
                                <p>Your package arrives at your doorstep with signature confirmation</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="shipping-section">
                    <h2>Frequently Asked Questions</h2>

                    <div className="faq-item">
                        <h3>Can I change my shipping address after placing an order?</h3>
                        <p>
                            Yes, you can update your shipping address within 2 hours of placing
                            your order by contacting our support team. Once the order is dispatched,
                            changes cannot be made.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>What happens if I'm not home during delivery?</h3>
                        <p>
                            Our courier partners will attempt delivery up to 3 times. You can also
                            reschedule delivery or opt for pickup at a nearby collection point.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>Do you offer gift wrapping?</h3>
                        <p>
                            Yes! Premium gift wrapping is available at checkout for $5.99.
                            Your order will arrive in our signature ALVERO gift box.
                        </p>
                    </div>
                </section>

                <section className="shipping-contact">
                    <h2>Need Help?</h2>
                    <p>Our customer support team is here to assist you with any shipping queries.</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:shipping@alvero.com">shipping@alvero.com</a></p>
                        <p><strong>Phone:</strong> +91 1800-123-4567 (Toll-free)</p>
                        <p><strong>Hours:</strong> Mon-Sat, 9 AM - 8 PM IST</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShippingDelivery;
