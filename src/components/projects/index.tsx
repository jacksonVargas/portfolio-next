import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { CardProjects } from './_components/card-projects'

export function Projects() {
  return (
    <Container>
      <section id='projects' className='py-15'>
        <Title
          title='PROJETOS RECENTES'
          span='Projetos recentes que desenvolvi, onde aplico minhas habilidades para criar experiências digitais modernas e bem estruturadas.'
        />

        <CardProjects />
      </section>
    </Container>
  )
}
