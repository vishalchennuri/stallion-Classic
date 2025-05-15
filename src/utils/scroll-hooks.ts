"use client";

import { useState, useEffect, RefObject } from 'react';

// Hook to track when an element enters or exits the viewport
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px',
  }
): { isIntersecting: boolean; intersectionRatio: number } {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setIntersectionRatio(entry.intersectionRatio);
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return { isIntersecting, intersectionRatio };
}

// Hook to track scroll position
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

// Hook to track if user has scrolled past a certain point
export function useScrollPast(threshold = 100) {
  const { y } = useScrollPosition();
  return y > threshold;
}

// Hook for parallax scrolling effect
export function useParallaxEffect(speed = 0.5) {
  const { y } = useScrollPosition();
  return {
    transform: `translateY(${y * speed}px)`,
  };
}

// Hook to track what section of the page is currently visible
export function useCurrentSection(sectionRefs: RefObject<Element>[]) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.forEach((ref, index) => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionRefs]);

  return currentSection;
}

// Hook to animate based on scroll progress through an element
export function useScrollProgress(ref: RefObject<Element>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const elementHeight = rect.height;
      
      // If element is not visible, progress is either 0 or 1
      if (visibleHeight <= 0) {
        setProgress(rect.top > windowHeight ? 0 : 1);
        return;
      }
      
      // Calculate progress based on how much of the element has been scrolled through
      const scrollProgress = 1 - (rect.bottom / (windowHeight + elementHeight));
      setProgress(Math.max(0, Math.min(1, scrollProgress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}
