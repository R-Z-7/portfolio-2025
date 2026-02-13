import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import Experience from '@/components/home/Experience'
import Certifications from '@/components/home/Certifications'
import Projects from '@/components/home/Projects'
import Contact from '@/components/home/Contact'

export default function Home() {
    return (
        <main className="flex flex-col w-full overflow-hidden bg-background min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Projects />
            <Contact />
        </main>
    )
}
