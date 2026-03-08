import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Changed to number to allow custom delays
  width?: "fit-content" | "100%";
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, width = "fit-content" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px" // Offset slightly so it triggers before bottom of screen
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
      style={{ 
        width,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;