import React from 'react';
import useScrollObserver from '../hooks/useScrollObserver';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useScrollObserver();
    return (
        <section
            ref={ref}
            className={`${className} animate-on-scroll ${isVisible ? 'is-visible' : ''} ${delay ? `delay-${delay}` : ''}`}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;
