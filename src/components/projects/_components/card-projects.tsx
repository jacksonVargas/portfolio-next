// Componentes
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { projects } from '../projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Icones
import { Github, ExternalLink } from 'lucide-react'

export function CardProjects() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {projects.map(project => (
        <Card className='pt-0' key={project.id}>
          <Image
            src={project.image}
            alt={project.title}
            quality={100}
            priority
            className='w-full h-full object-cover rounded-t-xl'
          />

          <div className='px-5'>
            <h3 className='text-xl font-semibold'>{project.title}</h3>
            <p className='md:text-sm text-zinc-500 mb-4'>{project.info}</p>
            <ul className='flex flex-wrap gap-1'>
              {project.tecs.map(tec => (
                <Badge key={tec} className='bg-black text-white select-none'>
                  {tec}
                </Badge>
              ))}
            </ul>

            <div className='grid grid-cols-2 gap-2 mt-4'>
              <Button asChild className='bg-black hover:bg-teal-600 text-white'>
                <a href={project.linkGit} target='_blank'>
                  <Github />
                  Código
                </a>
              </Button>

              <Button asChild className='bg-black hover:bg-teal-600 text-white'>
                <a href={project.linkPrev} target='_blank'>
                  <ExternalLink />
                  Demo
                </a>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
