'use client';

import { useEffect, useState, useRef } from 'react';

export function ScrollAnimation({ children, animateId, className = '' }) {
  const [animatedComponents, setAnimatedComponents] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute('data-animate-id');
          if (elementId) {
            setAnimatedComponents((prev) => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    const animatableElements = document.querySelectorAll('[data-animate-id]');
    animatableElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div
      data-animate-id={animateId}
      className={`animate-component ${animatedComponents.has(animateId) ? 'in-view' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
