import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './BecomeVendor.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const BecomeVendor = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        brandName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        category: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch(`${API_URL}/vendors`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSuccess(true);
                setTimeout(() => navigate('/'), 4000);
            } else {
                setError(data.message || 'Submission failed. Please try again.');
            }
        } catch (err) {
            console.error('Vendor submission error:', err);
            setError('Unable to reach the server. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="become-vendor page-container">
            <AnimatedSection className="become-vendor__header">
                <span className="become-vendor__label">Partner With Us</span>
                <h1 className="become-vendor__title">Become a Vendor</h1>
                <p className="become-vendor__subtitle">
                    Join ALVERO's exclusive marketplace and showcase your premium designs to our discerning clientele.
                </p>
            </AnimatedSection>

            <AnimatedSection className="become-vendor__content delay-100">
                {success ? (
                    <div className="become-vendor__success">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h2>Application Received</h2>
                        <p>Thank you for your interest in joining ALVERO. Our vendor team will review your application and contact you within 3-5 business days.</p>
                        <p className="become-vendor__redirect">Redirecting to home...</p>
                    </div>
                ) : (
                    <form className="become-vendor__form" onSubmit={handleSubmit}>
                        {error && <div className="become-vendor__error" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                        <div className="form-group">
                            <label htmlFor="brandName">Brand Name *</label>
                            <input type="text" id="brandName" value={formData.brandName} onChange={handleChange} required placeholder="Your luxury brand name" />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Primary Category *</label>
                            <select id="category" value={formData.category} onChange={handleChange} required>
                                <option value="" disabled>Select a category</option>
                                <option value="clothing-men">Men's Clothing</option>
                                <option value="clothing-women">Women's Clothing</option>
                                <option value="accessories">Accessories</option>
                                <option value="jewelry">Jewelry & Watches</option>
                                <option value="shoes">Footwear</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Brand Story & Vision</label>
                            <textarea id="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us about your brand's heritage, aesthetics, and why you'd be a good fit for ALVERO..."></textarea>
                        </div>

                        <button type="submit" className="become-vendor__submit" disabled={loading}>
                            {loading ? 'Submitting...' : 'Apply Now'}
                        </button>
                    </form>
                )}
            </AnimatedSection>
        </div>
    );
};

export default BecomeVendor;
