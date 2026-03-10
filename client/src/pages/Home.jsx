import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const fallbackFeatured = [
    { _id: '1', name: 'Grenoble Puffer Jacket', price: 2450, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop' },
    { _id: '2', name: 'Technical Ski Jacket', price: 3200, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=800&fit=crop' },
    { _id: '3', name: 'Logo Hoodie', price: 890, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop' },
    { _id: '4', name: 'Down Vest', price: 1150, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
];

const fallbackNewArrivals = [
    { _id: 'na-1', name: 'Urban Trench Coat', price: 3500, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop' },
    { _id: 'na-2', name: 'Cloud Knit Sweater', price: 1250, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop' },
    { _id: 'na-3', name: 'Designer Handbag', price: 4500, image: 'https://images.unsplash.com/photo-1590739293931-a02a4fe7e26c?w=600&h=800&fit=crop' },
];

/* Per-product image overrides for broken DB URLs */
const IMAGE_OVERRIDES = {
    'Technical Ski Jacket': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop',
    'Grenoble Puffer Jacket': 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop',
    'Down Vest': 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
};

const SimpleProductCard = ({ product }) => {
    const src = IMAGE_OVERRIDES[product.name]
        || product.image
        || (product.images && product.images[0])
        || '';
    return (
        <Link to="/products" className="home__simple-card">
            <div className="home__simple-card-image">
                <img
                    src={src}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.style.background = '#e8e4e0';
                    }}
                />
                <span className="home__simple-card-badge">Coming Soon</span>
            </div>
            <div className="home__simple-card-info">
                <h3>{product.name}</h3>
                <span>${product.price?.toLocaleString()}</span>
            </div>
        </Link>
    );
};

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState(fallbackFeatured);
    const [newArrivals, setNewArrivals] = useState(fallbackNewArrivals);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const [featuredRes, newArrivalsRes] = await Promise.all([
                    fetch(`${API_URL}/products?featured=true&limit=4`),
                    fetch(`${API_URL}/products?isNew=true&limit=3`),
                ]);
                if (!featuredRes.ok || !newArrivalsRes.ok) throw new Error();
                const featuredData = await featuredRes.json();
                const newArrivalsData = await newArrivalsRes.json();
                if (Array.isArray(featuredData) && featuredData.length > 0) setFeaturedProducts(featuredData);
                if (Array.isArray(newArrivalsData) && newArrivalsData.length > 0) setNewArrivals(newArrivalsData);
            } catch {
                // fallbacks already set
            }
        };
        fetchProducts();
    }, []);

    return (
        <main className="home">
            <Hero />

            {/* Bestsellers */}
            <AnimatedSection className="home__bestsellers">
                <div className="home__bestsellers-header">
                    <div className="home__bestsellers-accent"></div>
                    <span className="home__bestsellers-label">Bestsellers</span>
                    <h2 className="home__bestsellers-title">
                        Our Most Popular<br />
                        Pieces This Season
                    </h2>
                </div>
                <div className="home__bestsellers-grid">
                    <Link to="/products" className="home__bestseller-large">
                        <div className="home__bestseller-image">
                            <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800" alt="Essential Hoodie" loading="lazy" />
                        </div>
                        <div className="home__bestseller-info">
                            <h3>Essential Hoodie</h3>
                            <span className="home__bestseller-price">$99</span>
                        </div>
                    </Link>
                    <div className="home__bestseller-right">
                        <Link to="/products" className="home__bestseller-small">
                            <div className="home__bestseller-image">
                                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600" alt="Ocean Hoodie" loading="lazy" />
                            </div>
                            <div className="home__bestseller-info">
                                <h3>Ocean Hoodie</h3>
                                <span className="home__bestseller-price">$99</span>
                            </div>
                        </Link>
                        <Link to="/products" className="home__bestseller-small">
                            <div className="home__bestseller-image">
                                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600" alt="Forest Oversize T-Shirt" loading="lazy" />
                            </div>
                            <div className="home__bestseller-info">
                                <h3>Forest Oversize T-Shirt</h3>
                                <span className="home__bestseller-price">$49</span>
                            </div>
                        </Link>
                        <Link to="/products" className="home__view-collection-btn">
                            View Collection
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            {/* Category Banners */}
            <AnimatedSection className="home__categories">
                {[
                    { id: 'men', name: "Men's\nCollection", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80", link: "/products", className: "home__category--men" },
                    { id: 'women', name: "Women's\nCollection", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80", link: "/products", className: "home__category--women" },
                ].map((category) => (
                    <div key={category.id} className={`home__category ${category.className}`}>
                        <div className="home__category-image-wrapper">
                            <img src={category.image} alt={category.name.replace('\n', ' ')} className="home__category-image" />
                        </div>
                        <div className="home__category-content">
                            <h2>
                                {category.name.split('\n').map((line, i) => (
                                    <span key={i}>{line}{i === 0 && <br />}</span>
                                ))}
                            </h2>
                            <Link to={category.link} className="home__category-btn">
                                Shop Now
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </AnimatedSection>

            {/* New Arrivals */}
            <AnimatedSection className="home__new-arrivals">
                <div className="home__new-arrivals-header">
                    <div className="home__new-arrivals-accent"></div>
                    <span className="home__new-arrivals-label">New Arrivals</span>
                    <h2 className="home__new-arrivals-title">This Season's Must-Haves</h2>
                </div>
                <div className="home__new-arrivals-grid">
                    {newArrivals.map(product => <SimpleProductCard key={product._id} product={product} />)}
                </div>
            </AnimatedSection>

            {/* Trending Now */}
            <AnimatedSection className="home__trending">
                <div className="home__trending-header">
                    <div className="home__trending-accent"></div>
                    <span className="home__trending-label">Trending Now</span>
                    <h2 className="home__trending-title">Hottest Styles</h2>
                </div>
                <div className="home__trending-grid">
                    {featuredProducts.slice(0, 4).map(product => <SimpleProductCard key={product._id} product={product} />)}
                </div>
            </AnimatedSection>

            {/* Marquee Text Banner */}
            <section className="home__marquee-banner">
                <div className="home__marquee-track">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="home__marquee-content">
                            <span className="home__marquee-text">ALVERO</span>
                            <span className="home__marquee-text home__marquee-text--outline">COLLECTION</span>
                            <span className="home__marquee-text">2026</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Designer Houses */}
            <AnimatedSection className="home__designer-houses">
                <div className="home__designer-houses-header">
                    <div className="home__designer-houses-accent"></div>
                    <span className="home__designer-houses-label">Partners</span>
                    <h2 className="home__designer-houses-title">Top Designer Houses</h2>
                </div>
                <div className="home__designer-houses-grid">
                    {[
                        { name: "Aurum", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80" },
                        { name: "Vanguard", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
                        { name: "Solstice", image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=400&q=80" },
                        { name: "Nebula", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
                        { name: "Pinnacle", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80" },
                        { name: "Equinox", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
                    ].map((brand, i) => (
                        <div key={i} className="home__designer-card">
                            <div className="home__designer-image-wrapper">
                                <img src={brand.image} alt={brand.name} className="home__designer-image" loading="lazy" />
                                <div className="home__designer-overlay">
                                    <span className="home__designer-name">{brand.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="home__designer-houses-footer">
                    <Link to="/become-vendor" className="home__design-house-btn">BECOME A VENDOR</Link>
                </div>
            </AnimatedSection>

            {/* About Section */}
            <AnimatedSection className="home__about">
                <div className="home__about-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2070&auto=format&fit=crop" alt="Our Story Background" className="home__about-background" />
                    <div className="home__about-overlay"></div>
                </div>
                <div className="home__about-content">
                    <div className="home__about-text-content">
                        <h2>Pieces beyond seasons.</h2>
                    </div>
                    <Link to="/about" className="home__about-btn">
                        Our Story
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </Link>
                </div>
            </AnimatedSection>

            {/* Socials */}
            <AnimatedSection className="home__socials">
                <div className="home__socials-header">
                    <div className="home__trending-accent"></div>
                    <span className="home__trending-label">Socials</span>
                    <h2 className="home__trending-title">Follow Us @alvero</h2>
                </div>
                <div className="home__socials-marquee">
                    <div className="home__socials-track">
                        {[
                            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
                            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
                            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
                            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
                            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
                            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
                            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
                            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
                            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
                            "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&q=80",
                            // duplicate set for seamless loop
                            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
                            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
                            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
                            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
                        ].map((src, i) => (
                            <div key={i} className="home__social-item">
                                <img src={src} alt={`Social ${i}`} className="home__social-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </main>
    );
};

export default Home;
