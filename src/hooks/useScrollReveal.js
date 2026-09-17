import { useEffect, useRef } from 'react';

// Returns a ref-callback: attach it to any element you want to
// fade/slide in once it scrolls into view. Add the shared `.reveal`
// class (see App.css) to that element for the actual animation.
export default function useScrollReveal(threshold = 0.15) {
  const elements = useRef([]);
  elements.current = [];

  const addRef = (el) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold }
    );
    elements.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return addRef;
}