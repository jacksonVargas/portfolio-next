import { StaticImageData } from 'next/image'

import { Github } from 'lucide-react'

import devControle from '@/assets/dev-controle.png'

export interface ProjectsProps {
  id: number
  image: StaticImageData
  title: string
  info: string
  tecs: string[]
  linkGit: string
  linkPrev: string
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    image: devControle,
    title: 'DevControle',
    info: 'Sistema para gerenciamento de clientes e chamados.',
    tecs: [
      'Next',
      'Shadcn',
      'Api-Routes',
      'Tailwindcss',
      'Prisma',
      'Neon',
      'PostgresSQL',
    ],
    linkGit: 'https://github.com/jacksonVargas/dev_controle_app',
    linkPrev: 'https://dev-controle-app.vercel.app/',
  },
]
