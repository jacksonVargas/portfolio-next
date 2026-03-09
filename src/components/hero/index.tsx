// Icons
import { Github, Linkedin } from 'lucide-react'

// Componentes
import { Container } from '@/components/container'

export function Hero() {
  return (
    <Container>
      <section id='hero' className='w-full min-h-screen grid place-items-center'>
        <div>
          {/* Texto */}
          <div className='text-center space-y-4'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl mb-2'>
              Olá, meu nome é <span className='text-teal-500'>Jackson Vargas</span>
            </h1>

            <p className='text-lg text-teal-500'>Desenvolvedor web Front-End</p>
            <p className='max-w-3xl mx-auto text-sm text-zinc-500 mb-8'>
              Transformo ideias em experiências digitais incríveis. Especializado em Next, TypeScript e interfaces
              modernas que encantam usuários.
            </p>
          </div>

          {/* Links */}
          <div className='flex justify-center gap-2'>
            <a
              href='#projects'
              className='transition-all duration-300 hover:-translate-y-1 text-sm py-2 px-5 bg-teal-600 text-white rounded'
            >
              Ver Projetos
            </a>

            <a
              href='#projects'
              className='transition-all duration-300 hover:-translate-y-1 text-sm py-2 px-5 bg-black text-white dark:bg-white dark:text-black rounded'
            >
              Meu Contato
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}
