import { Container } from '@/components/container'

export function Footer() {
  return (
    <footer className='w-full py-5 bg-background border-t'>
      <Container>
        <p className='text-center md:text-sm text-zinc-500'>&copy; {new Date().getFullYear()} - Jackson Vargas</p>
      </Container>
    </footer>
  )
}
