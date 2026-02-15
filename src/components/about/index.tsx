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
              Criando o futuro,{' '}
              <span className='text-teal-500'>uma linha de código</span> por vez
            </h3>

            <p className='text-sm text-zinc-500'>
              Sou um desenvolvedor web front-end apaixonado por criar
              experiências digitais memoráveis. Com mais de 5 anos de
              experiência, já ajudei diversas empresas a transformar suas ideias
              em produtos digitais de sucesso. <br /> <br />
              Meu foco está em Next e seu ecossistema, sempre buscando as
              melhores soluções para cada projeto. Acredito que um bom código é
              aquele que não só funciona, mas também é fácil de entender e
              manter.
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
