"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

// Use a simple, performance-friendly particle system
function Particles(props: any) {
    const ref = useRef<THREE.Points>(null!);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Create uniform grid for static background if needed, or stick to random
    // Generate particles in a random distribution
    const [sphere] = useState(() => {
        const count = 1500;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = 20 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    });

    useEffect(() => {
        if (ref.current) {
            ref.current.geometry.setAttribute('position', new THREE.BufferAttribute(sphere, 3));
        }
    }, [sphere]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30;
            ref.current.rotation.y -= delta / 40;
        }
    });

    if (!mounted) return null;

    const isDark = theme === 'dark' || theme === 'system'; // Default to dark for system if unknown/SSR
    // Actually next-themes handles system, so resolvedTheme is better, usually available from useTheme
    // But theme might be 'system'. We can default to blending ADD for dark aesthetics.

    // Better retrieval of resolved theme
    // const { resolvedTheme } = useTheme(); 
    // However, inside this component we should prop drill or just use hook.

    // Assuming 'theme' is enough or fallback to dark style.
    // For light mode, we need NormalBlending and a dark color.
    const isLight = theme === 'light';

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={isLight ? "#0f172a" : "#38bdf8"}
                    size={0.06}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending}
                    opacity={isLight ? 0.4 : 0.6}
                />
            </Points>
        </group>
    );
}

function SceneCheck() {
    // Logic to pause rendering if tab is inactive
    const { gl, advance } = useThree();

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                gl.setAnimationLoop(null); // Pause
            } else {
                gl.setAnimationLoop((timestamp) => advance(timestamp)); // Resume
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [gl, advance]);

    return null;
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]} // Clamp DPR for mobile performance
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
            >
                <SceneCheck />
                <Particles />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    {/* Add some subtle floating shapes if needed, or keep minimal with particles */}
                </Float>
            </Canvas>
        </div>
    );
}
