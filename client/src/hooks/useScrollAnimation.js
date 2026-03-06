import { useEffect, useRef, useState } from 'react';

// Basic scroll animation hook
export const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};

// Parallax scroll effect hook
export const useParallax = (speed = 0.5) => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const scrolled = window.innerHeight - rect.top;
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setOffset(scrolled * speed);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return [ref, offset];
};

// Staggered children animation hook
export const useStaggeredAnimation = (threshold = 0.1, staggerDelay = 100) => {
    const ref = useRef(null);
    const [visibleIndices, setVisibleIndices] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const children = ref.current?.children;
                    if (children) {
                        Array.from(children).forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleIndices(prev => [...prev, index]);
                            }, index * staggerDelay);
                        });
                    }
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, staggerDelay]);

    return [ref, visibleIndices];
};

// Mouse parallax effect hook
export const useMouseParallax = (sensitivity = 0.05) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const x = (e.clientX - centerX) * sensitivity;
                const y = (e.clientY - centerY) * sensitivity;
                setPosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [sensitivity]);

    return [ref, position];
};

export default useScrollAnimation;
