import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HERO_SLIDES = [
    {
        image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80',
        title: 'Timeless Essentials\nfor the Season',
    },
    {
        image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=1920&q=80',
        title: 'Premium Outerwear\nCollection',
    },
    {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
        title: 'Statement Pieces\nfor Every Occasion',
    }
];

const Hero = ({
    ctaText = "Shop Now",
    ctaLink = "/products"
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides every 6 seconds (synced with progress bar animation)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const formatSlideNumber = (num) => {
        return String(num + 1).padStart(2, '0');
    };

    return (
        <section className="hero">
            <div className="hero__media">
                {HERO_SLIDES.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className={`hero__image ${index === currentSlide ? 'active' : ''}`}
                    />
                ))}
                <div className="hero__overlay"></div>
            </div>

            {/* Bottom Content Area */}
            <div className="hero__bottom">
                {/* Left - Text Content */}
                <div className="hero__content-left">
                    <span className="hero__slide-counter">
                        {formatSlideNumber(currentSlide)} — {formatSlideNumber(HERO_SLIDES.length - 1)}
                    </span>
                    <h1 className="hero__title-new">
                        {HERO_SLIDES[currentSlide].title.split('\n').map((line, i) => (
                            <span key={`${currentSlide}-${i}`} className="hero__title-line">
                                {line}
                                <br />
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Right - CTA Button */}
                <div className="hero__content-right">
                    <Link to={ctaLink} className="hero__cta-new">
                        {ctaText}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Progress Bar Indicators */}
            <div className="hero__progress">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        className={`hero__progress-bar ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'completed' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    >
                        <span
                            key={`fill-${index}-${currentSlide}`}
                            className="hero__progress-fill"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Hero;
