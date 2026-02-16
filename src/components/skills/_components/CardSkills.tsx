import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function CardSkills() {
  return (
    <div className='grid md:grid-cols-3 gap-3'>
      <Card>
        <CardContent className='grid gap-3'>
          <h3 className='text-teal-500 text-xl'>// Frontend</h3>
          <div className='flex flex-wrap gap-2'>
            <Badge className='max-md:text-sm select-none bg-black text-white'>React</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Next</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>TypeScript</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Tailwind CSS</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Astro</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='grid gap-3'>
          <h3 className='text-teal-500 text-xl'>// Backend</h3>
          <div className='flex flex-wrap gap-2'>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Node.js</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Express</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>PostgreSQL</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Prisma</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Neon</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Insomnia</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='grid gap-3'>
          <h3 className='text-teal-500 text-xl'>// Ferramentas</h3>
          <div className='flex flex-wrap gap-2'>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Git</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Auth.js</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Better-Auth</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>Shadcn</Badge>
            <Badge className='max-md:text-sm select-none bg-black text-white'>React-Hook-Form</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}