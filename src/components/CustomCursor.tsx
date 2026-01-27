'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for the ring
  const springConfig = { damping: 25, stiffness: 120 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on client-side and fine pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || isReducedMotion) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="hover"]') ||
        target.closest('.magnetic-wrap'); // Elements produced by Magnetic component

      setIsHovered(!!isInteractive);
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);
    // We can reset hover state on some conditions or just let mouseover handle it.
    // However, mouseover bubbles, so moving from one interactive el to another triggers it correctly.
    // Moving to non-interactive needs to clear it.
    
    // Improved hover detection: check on every mouse move or use event delegation more carefully.
    // A simpler approach for globally tracking hover state:
    const checkHover = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="hover"]');
        
       setIsHovered(!!isInteractive);
    }
    
    window.addEventListener('mousemove', checkHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', checkHover);
      window.removeEventListener('mouseover', handleHoverStart); // Cleanup if used
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-white rounded-full mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
      
      {/* Ring */}
      <motion.div
        className="absolute rounded-full border border-white/50 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 54 : 34,
          height: isHovered ? 54 : 34,
          opacity: isHovered ? 1 : 0.6,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
        transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            mass: 0.5
        }}
      />
    </div>
  );
}
