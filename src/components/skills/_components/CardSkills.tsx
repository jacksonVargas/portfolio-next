import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function CardSkills() {
  return (
    <div className='grid md:grid-cols-3 gap-3'>
      <Card>
        <CardContent className='grid gap-3'>
          <h3 className='text-teal-500 text-xl'>// Frontend</h3>
          <div className='flex flex-wrap gap-2'>
            <Badge className='select-none'>React</Badge>
            <Badge className='select-none'>Next</Badge>
            <Badge className='select-none'>TypeScript</Badge>
            <Badge className='select-none'>Tailwind CSS</Badge>
            <Badge className='select-none'>Astro</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='grid gap-3'>
          <h3 className='text-teal-500 text-xl'>// Backend</h3>
          <div className='flex flex-wrap gap-2'>
            <Badge className='select-none'>Node.js</Badge>
            <Badge className='select-none'>Express</Badge>
            <Badge className='select-none'>PostgreSQL</Badge>
            <Badge className='select-none'>Prisma</Badge>
            <Badge className='select-none'>Neon</Badge>
            <Badge className='select-none'>Insomnia</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='grid gap-3'>
          <h3 className='text-teal-500 text-xl'>// Ferramentas</h3>
          <div className='flex flex-wrap gap-2'>
            <Badge className='select-none'>Git</Badge>
            <Badge className='select-none'>Auth.js</Badge>
            <Badge className='select-none'>Better-Auth</Badge>
            <Badge className='select-none'>Shadcn</Badge>
            <Badge className='select-none'>React-Hook-Form</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}