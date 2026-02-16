import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { CardSkills } from './_components/CardSkills'

export function Skills() {
  return (
    <Container>
      <section id='skills' className='py-15'>
        <Title
          title='MINHAS SKILLS'
          span='Tecnologias e ferramentas que utilizo para criar experiências incríveis'
        />

        <CardSkills />
      </section>
    </Container>
  )
}
