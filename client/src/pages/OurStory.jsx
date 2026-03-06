import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import CountUpAnimation from '../components/CountUpAnimation';
import './OurStory.css';


const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="our-story-page">
            {/* Hero Section */}
            <section className="story-hero">
                <div className="story-hero-content">
                    <span className="story-label">(Our Story)</span>
                    <h1>Crafting Excellence Since Day One</h1>
                    <p>
                        Where quality meets style, and every piece tells a story of
                        craftsmanship, passion, and dedication to the art of fashion.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="story-intro">
                <div className="story-intro-content">
                    <div className="intro-text">
                        <h2>Welcome to ALVERO</h2>
                        <p>
                            ALVERO was born from a simple vision: to create a marketplace where quality
                            fashion is accessible to everyone. We believe that great style shouldn't
                            come at the cost of quality or ethics.
                        </p>
                        <p>
                            Today, we're proud to be India's premier multi-vendor fashion platform,
                            connecting talented designers and vendors with discerning customers who
                            appreciate the finer things in life.
                        </p>
                    </div>
                    <div className="intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop"
                            alt="ALVERO Store"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="story-mission">
                <div className="mission-grid">
                    <div className="mission-card">
                        <span className="mission-number">01</span>
                        <h3>Our Mission</h3>
                        <p>
                            To democratize fashion by providing a platform where independent vendors
                            can showcase their unique creations, and customers can discover exceptional
                            pieces that reflect their personal style.
                        </p>
                    </div>
                    <div className="mission-card">
                        <span className="mission-number">02</span>
                        <h3>Our Vision</h3>
                        <p>
                            To become the most trusted fashion marketplace in India, known for
                            quality, authenticity, and an unparalleled shopping experience that
                            delights customers at every touchpoint.
                        </p>
                    </div>
                    <div className="mission-card">
                        <span className="mission-number">03</span>
                        <h3>Our Promise</h3>
                        <p>
                            Every product on ALVERO is carefully curated. We work closely with our
                            vendors to ensure the highest standards of quality, ensuring you receive
                            nothing but the best.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="story-values">
                <div className="values-header">
                    <span className="story-label">(What We Stand For)</span>
                    <h2>Our Core Values</h2>
                </div>
                <div className="values-grid">
                    <div className="value-item">
                        <div className="value-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <h4>Quality First</h4>
                        <p>We never compromise on quality. Every product goes through rigorous quality checks.</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h4>Community</h4>
                        <p>We support local artisans and vendors, helping them reach customers worldwide.</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h4>Reliability</h4>
                        <p>Fast shipping, easy returns, and customer service that's always there for you.</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h4>Innovation</h4>
                        <p>Constantly evolving to bring you the latest trends and shopping features.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <AnimatedSection className="story-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">
                            <CountUpAnimation target={500} suffix="+" />
                        </span>
                        <span className="stat-label">Verified Vendors</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            <CountUpAnimation target={10} suffix="K+" />
                        </span>
                        <span className="stat-label">Products</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            <CountUpAnimation target={50} suffix="K+" />
                        </span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            <CountUpAnimation target={100} suffix="+" />
                        </span>
                        <span className="stat-label">Cities Served</span>
                    </div>
                </div>
            </AnimatedSection>

            {/* Journey Timeline */}
            <section className="story-journey">
                <div className="journey-header">
                    <span className="story-label">(Our Journey)</span>
                    <h2>Milestones</h2>
                </div>
                <div className="story-timeline">
                    <div className="story-timeline-item">
                        <div className="story-timeline-year">2022</div>
                        <div className="story-timeline-content">
                            <h4>The Beginning</h4>
                            <p>ALVERO was founded with a vision to revolutionize online fashion shopping in India.</p>
                        </div>
                    </div>
                    <div className="story-timeline-item">
                        <div className="story-timeline-year">2023</div>
                        <div className="story-timeline-content">
                            <h4>Growing Community</h4>
                            <p>Onboarded 100+ vendors and launched our multi-vendor marketplace platform.</p>
                        </div>
                    </div>
                    <div className="story-timeline-item">
                        <div className="story-timeline-year">2024</div>
                        <div className="story-timeline-content">
                            <h4>Nationwide Reach</h4>
                            <p>Expanded delivery to 100+ cities across India with same-day delivery in metros.</p>
                        </div>
                    </div>
                    <div className="story-timeline-item">
                        <div className="story-timeline-year">2025</div>
                        <div className="story-timeline-content">
                            <h4>New Heights</h4>
                            <p>Crossed 50,000 happy customers and introduced premium vendor partnerships.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="story-cta">
                <div className="cta-content">
                    <h2>Join the ALVERO Family</h2>
                    <p>
                        Whether you're a customer looking for quality fashion or a vendor wanting to
                        reach thousands of customers, ALVERO is the place for you.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/products" className="cta-btn primary">Shop Now</Link>
                        <Link to="/apply-vendor" className="cta-btn secondary">Become a Vendor</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurStory;
