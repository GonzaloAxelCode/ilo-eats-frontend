import { useEffect, useState } from 'react';

const useScroll = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollY };
};

export default useScroll;
