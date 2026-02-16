// Componentes
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
