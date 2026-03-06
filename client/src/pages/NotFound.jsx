import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <main className="not-found-page">
            <div className="not-found-container">
                <div className="not-found-code">404</div>
                <h1 className="not-found-title">Page Not Found</h1>
                <p className="not-found-description">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <div className="not-found-actions">
                    <Link to="/" className="not-found-btn primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Back to Home
                    </Link>
                    <button onClick={() => navigate(-1)} className="not-found-btn secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Go Back
                    </button>
                </div>

                <hr className="not-found-divider" />

                <div className="not-found-links">
                    <p>Quick Links</p>
                    <div className="not-found-quick-links">
                        <Link to="/products">Shop</Link>
                        <Link to="/new-arrivals">New Arrivals</Link>
                        <Link to="/about">Our Story</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/faq">FAQ</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
