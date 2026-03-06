import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const close = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${!isHomePage ? 'header--dark' : ''} ${isMobileMenuOpen ? 'header--menu-open' : ''}`}>
                <div className="header__container">
                    {/* Left Navigation */}
                    <nav className="header__nav header__nav--left">
                        <Link to="/products" className="header__nav-link">Women</Link>
                        <Link to="/products" className="header__nav-link">Men</Link>
                        <Link to="/new-arrivals" className="header__nav-link">New Arrivals</Link>
                    </nav>

                    {/* Logo */}
                    <Link to="/" className="header__logo">
                        <span className="header__logo-text">ALVERO</span>
                    </Link>

                    {/* Right Navigation */}
                    <nav className="header__nav header__nav--right">
                        <Link to="/about" className="header__nav-link">Our Story</Link>
                        <Link to="/contact" className="header__nav-link">Contact</Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="header__mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className={`header__hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`header__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <nav className="header__mobile-nav">
                        <Link to="/products" onClick={close}>Women</Link>
                        <Link to="/products" onClick={close}>Men</Link>
                        <Link to="/new-arrivals" onClick={close}>New Arrivals</Link>
                        <Link to="/about" onClick={close}>Our Story</Link>
                        <Link to="/contact" onClick={close}>Contact</Link>
                        <Link to="/faq" onClick={close}>FAQ</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
