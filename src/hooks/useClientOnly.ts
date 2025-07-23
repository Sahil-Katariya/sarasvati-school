'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to handle client-side only rendering
 * Prevents hydration mismatches by ensuring content only renders after hydration
 */
export function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Custom hook for scroll detection with hydration safety
 */
export function useScrollDetection(threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isClient = useClientOnly();

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient, threshold]);

  return isClient ? isScrolled : false;
}
