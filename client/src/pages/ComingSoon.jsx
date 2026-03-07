import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './ComingSoon.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/subscribers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
                navigate('/thank-you');
            } else {
                setError(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Unable to connect. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="coming-soon">
            <AnimatedSection className="coming-soon__content">
                <span className="coming-soon__label">Pre-Launch Edition</span>
                <h1 className="coming-soon__title">COMING SOON</h1>
                <p className="coming-soon__description">
                    Our exclusive collection is currently being prepared for the grand launch.
                    Be the first to experience ALVERO.
                </p>

                <form className="coming-soon__form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="coming-soon__input"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <button type="submit" className="coming-soon__button" disabled={loading}>
                        {loading ? 'Sending…' : 'Notify Me'}
                    </button>
                </form>

                {error && <p className="coming-soon__error">{error}</p>}

                <div className="coming-soon__footer">
                    <Link to="/" className="coming-soon__home-link">
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

export default ComingSoon;
