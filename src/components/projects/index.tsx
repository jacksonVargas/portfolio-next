import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { CardProjects } from './_components/card-projects'

export function Projects() {
  return (
    <Container>
      <section id='projects' className='py-15'>
        <Title
          title='PROJETOS RECENTES'
          span='Alguns dos projetos que desenvolvi recentemente, demonstrando minhas habilidades e paixão por criar experiências digitais.'
        />

        <CardProjects />
      </section>
    </Container>
  )
}
