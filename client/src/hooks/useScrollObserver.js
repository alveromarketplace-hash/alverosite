import { useEffect, useRef, useState } from 'react';

const useScrollObserver = (options) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        });

        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
        // We assume options are stable or primitive to prevent infinite loops.
        // Using JSON.stringify for safety if options is an object literal.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options ? JSON.stringify(options) : '']);

    return [elementRef, isVisible];
};

export default useScrollObserver;
