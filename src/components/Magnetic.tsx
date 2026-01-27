'use client';

import { useRef, useState, ReactElement, cloneElement } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticProps {
    children: ReactElement;
    strength?: number; // How strong the pull is (0.1 to 1)
    springOptions?: {
        stiffness?: number;
        damping?: number;
        mass?: number;
    };
}

export default function Magnetic({
    children,
    strength = 0.25,
    springOptions = { stiffness: 150, damping: 15, mass: 0.1 },
}: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        // Calculate distance from center
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        // Apply strength
        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    // Use spring animation for the position
    // We can animate the wrapper div

    return (
        <motion.div
            className="magnetic-wrap"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{
                type: "spring",
                ...springOptions
            }}
        >
            {children}
        </motion.div>
    );
}
