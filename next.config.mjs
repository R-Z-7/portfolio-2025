/** @type {import('next').NextConfig} */
const nextConfig = {
    // Transpile packages like three.js if needed, though usually works out of box
    transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;
