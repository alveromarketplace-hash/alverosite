import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './ThankYou.css';

const ThankYou = () => {
    return (
        <div className="thankyou">
            <AnimatedSection className="thankyou__content">
                <div className="thankyou__icon">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" />
                        <path d="M22 40l12 12 24-24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="thankyou__label">You're on the list</span>
                <h1 className="thankyou__title">Thank You for Visiting</h1>
                <p className="thankyou__description">
                    We appreciate your interest in ALVERO. You'll be among the first to know
                    when our exclusive collection launches. Stay tuned for something remarkable.
                </p>
                <div className="thankyou__divider" />
                <div className="thankyou__footer">
                    <Link to="/" className="thankyou__home-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Return Home
                    </Link>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default ThankYou;
