// Componentes
import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { CardAbout } from './_components/card-about'

export function About() {
  return (
    <Container>
      <section id='about' className='py-15'>
        <Title title='SOBRE MIM' span='Conheça um pouco da minha trajetória' />

        <div className='grid md:grid-cols-2 gap-7'>
          <div>
            <h3 className='text-2xl md:text-3xl mb-2'>
              Criando o futuro, <span className='text-teal-500'>uma linha de código</span> por vez
            </h3>

            <p className='text-sm text-zinc-500'>
              Sou desenvolvedor Front-End com mais de 4 anos de experiência, focado em construir interfaces rápidas,
              acessíveis e bem estruturadas. <br /> <br />
              Trabalho principalmente com Next.js e seu ecossistema, buscando sempre escrever código limpo, escalável e
              fácil de manter. Meu objetivo é transformar ideias em experiências digitais eficientes e bem construídas.
            </p>
          </div>

          <div>
            <CardAbout title='' body='' icon='' />
          </div>
        </div>
      </section>
    </Container>
  )
}
