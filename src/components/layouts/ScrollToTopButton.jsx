import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show the button when the user has scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`
        fixed bottom-4 right-4 cursor-pointer z-50 transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
        >
            <button
                onClick={scrollToTop}
                className="
          p-3 rounded-full bg-blue-600 text-white shadow-lg
          hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
        "
                aria-label="Scroll to top"
            >
                <FaArrowUp size={24} />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
