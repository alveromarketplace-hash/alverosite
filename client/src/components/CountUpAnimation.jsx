import { useState, useEffect, useRef } from 'react';

const CountUpAnimation = ({ target, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const step = target / (duration / 16);
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            clearInterval(timer);
                            setCount(target);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

export default CountUpAnimation;
