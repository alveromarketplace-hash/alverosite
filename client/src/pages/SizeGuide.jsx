import { useEffect, useState } from 'react';
import './SizeGuide.css';

const SizeGuide = () => {
    const [activeCategory, setActiveCategory] = useState('women');
    const [activeType, setActiveType] = useState('tops');
    const [unit, setUnit] = useState('inches');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sizeData = {
        women: {
            tops: {
                headers: ['Size', 'US', 'UK', 'EU', 'Bust', 'Waist', 'Hip'],
                rows: [
                    ['XS', '0-2', '4-6', '32-34', '32-33', '24-25', '34-35'],
                    ['S', '4-6', '8-10', '36-38', '34-35', '26-27', '36-37'],
                    ['M', '8-10', '12-14', '40-42', '36-37', '28-29', '38-39'],
                    ['L', '12-14', '16-18', '44-46', '38-40', '30-32', '40-42'],
                    ['XL', '16-18', '20-22', '48-50', '41-43', '33-35', '43-45'],
                ]
            },
            bottoms: {
                headers: ['Size', 'US', 'UK', 'EU', 'Waist', 'Hip', 'Inseam'],
                rows: [
                    ['XS', '0-2', '4-6', '32-34', '24-25', '34-35', '30'],
                    ['S', '4-6', '8-10', '36-38', '26-27', '36-37', '30'],
                    ['M', '8-10', '12-14', '40-42', '28-29', '38-39', '31'],
                    ['L', '12-14', '16-18', '44-46', '30-32', '40-42', '31'],
                    ['XL', '16-18', '20-22', '48-50', '33-35', '43-45', '32'],
                ]
            },
            dresses: {
                headers: ['Size', 'US', 'UK', 'EU', 'Bust', 'Waist', 'Hip', 'Length'],
                rows: [
                    ['XS', '0-2', '4-6', '32-34', '32-33', '24-25', '34-35', '35'],
                    ['S', '4-6', '8-10', '36-38', '34-35', '26-27', '36-37', '36'],
                    ['M', '8-10', '12-14', '40-42', '36-37', '28-29', '38-39', '37'],
                    ['L', '12-14', '16-18', '44-46', '38-40', '30-32', '40-42', '38'],
                    ['XL', '16-18', '20-22', '48-50', '41-43', '33-35', '43-45', '39'],
                ]
            }
        },
        men: {
            tops: {
                headers: ['Size', 'US/UK', 'EU', 'Chest', 'Waist', 'Sleeve'],
                rows: [
                    ['XS', '34', '44', '34-36', '28-30', '32'],
                    ['S', '36', '46', '36-38', '30-32', '33'],
                    ['M', '38-40', '48-50', '38-40', '32-34', '34'],
                    ['L', '42-44', '52-54', '42-44', '36-38', '35'],
                    ['XL', '46-48', '56-58', '46-48', '40-42', '36'],
                    ['XXL', '50-52', '60-62', '50-52', '44-46', '37'],
                ]
            },
            bottoms: {
                headers: ['Size', 'Waist', 'EU', 'Hip', 'Inseam (Regular)', 'Inseam (Long)'],
                rows: [
                    ['28', '28', '44', '36', '30', '32'],
                    ['30', '30', '46', '38', '30', '32'],
                    ['32', '32', '48', '40', '31', '33'],
                    ['34', '34', '50', '42', '31', '33'],
                    ['36', '36', '52', '44', '32', '34'],
                    ['38', '38', '54', '46', '32', '34'],
                    ['40', '40', '56', '48', '32', '34'],
                ]
            },
            suits: {
                headers: ['Size', 'Chest', 'Waist', 'Shoulder', 'Sleeve', 'Jacket Length'],
                rows: [
                    ['36S', '36', '30', '17', '23', '28'],
                    ['38R', '38', '32', '17.5', '24', '29'],
                    ['40R', '40', '34', '18', '25', '30'],
                    ['42R', '42', '36', '18.5', '25.5', '30.5'],
                    ['44R', '44', '38', '19', '26', '31'],
                    ['46L', '46', '40', '19.5', '27', '32'],
                ]
            }
        }
    };

    const measurementGuide = [
        {
            name: 'Bust/Chest',
            icon: '📏',
            description: 'Measure around the fullest part of your bust/chest, keeping the tape horizontal.'
        },
        {
            name: 'Waist',
            icon: '📐',
            description: 'Measure around your natural waistline, the narrowest part of your torso.'
        },
        {
            name: 'Hip',
            icon: '📏',
            description: 'Measure around the fullest part of your hips, about 8 inches below your waist.'
        },
        {
            name: 'Inseam',
            icon: '📐',
            description: 'Measure from the crotch seam to the bottom of the leg along the inner seam.'
        },
        {
            name: 'Sleeve',
            icon: '📏',
            description: 'Measure from the center back of your neck, over the shoulder, to your wrist.'
        }
    ];

    const currentData = sizeData[activeCategory][activeType];
    const types = Object.keys(sizeData[activeCategory]);

    return (
        <div className="size-guide-page">
            <div className="size-guide-hero">
                <h1>Size Guide</h1>
                <p>Find your perfect fit with our comprehensive sizing charts</p>
            </div>

            <div className="size-guide-content">
                <section className="size-intro">
                    <p>
                        All measurements are in {unit}. For the best fit, take your measurements over
                        light clothing and compare them to our size charts below.
                    </p>
                </section>

                <div className="size-controls">
                    <div className="category-tabs">
                        <button
                            className={`category-tab ${activeCategory === 'women' ? 'active' : ''}`}
                            onClick={() => { setActiveCategory('women'); setActiveType('tops'); }}
                        >
                            Women
                        </button>
                        <button
                            className={`category-tab ${activeCategory === 'men' ? 'active' : ''}`}
                            onClick={() => { setActiveCategory('men'); setActiveType('tops'); }}
                        >
                            Men
                        </button>
                    </div>

                    <div className="unit-toggle">
                        <button
                            className={`unit-btn ${unit === 'inches' ? 'active' : ''}`}
                            onClick={() => setUnit('inches')}
                        >
                            Inches
                        </button>
                        <button
                            className={`unit-btn ${unit === 'cm' ? 'active' : ''}`}
                            onClick={() => setUnit('cm')}
                        >
                            CM
                        </button>
                    </div>
                </div>

                <div className="type-tabs">
                    {types.map((type) => (
                        <button
                            key={type}
                            className={`type-tab ${activeType === type ? 'active' : ''}`}
                            onClick={() => setActiveType(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                <section className="size-table-section">
                    <div className="size-table-wrapper">
                        <table className="size-table">
                            <thead>
                                <tr>
                                    {currentData.headers.map((header, idx) => (
                                        <th key={idx}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.rows.map((row, rowIdx) => (
                                    <tr key={rowIdx}>
                                        {row.map((cell, cellIdx) => (
                                            <td key={cellIdx} className={cellIdx === 0 ? 'size-cell' : ''}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="measurement-guide">
                    <h2>How to Measure</h2>
                    <p className="guide-intro">
                        For accurate measurements, use a flexible measuring tape and follow these guidelines:
                    </p>
                    <div className="measurement-grid">
                        {measurementGuide.map((item, idx) => (
                            <div key={idx} className="measurement-item">
                                <div className="measurement-icon">{item.icon}</div>
                                <div className="measurement-content">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="fit-tips">
                    <h2>Fit Tips</h2>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <h3>Between Sizes?</h3>
                            <p>
                                If you're between sizes, we recommend sizing up for a more comfortable fit,
                                especially for structured pieces like jackets and coats.
                            </p>
                        </div>
                        <div className="tip-card">
                            <h3>Relaxed vs Fitted</h3>
                            <p>
                                Our product descriptions indicate the intended fit. "Relaxed" items are
                                designed to be worn looser, while "Fitted" items are more tailored.
                            </p>
                        </div>
                        <div className="tip-card">
                            <h3>Natural Fabrics</h3>
                            <p>
                                Items made from natural fabrics like cotton and linen may shrink slightly
                                after washing. Consider sizing up if you prefer a looser fit.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="size-help">
                    <h2>Still Need Help?</h2>
                    <p>Our style advisors are here to help you find your perfect size.</p>
                    <div className="help-options">
                        <a href="mailto:style@alvero.com" className="help-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Email Us
                        </a>
                        <a href="tel:+911800123456" className="help-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Call Us
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SizeGuide;
