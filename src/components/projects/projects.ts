import { StaticImageData } from 'next/image'

// Imagens
import devControle from '@/assets/dev-controle.png'
import login from '@/assets/login.png'

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
      'Typescript',
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
  {
    id: 2,
    image: login,
    title: 'Login Better Auth',
    info: 'Sistema de login com email/senha e login social usando better-auth.',
    tecs: [
      'Next',
      'Typescript',
      'Shadcn',
      'Better-Auth',
      'Tailwindcss',
      'Prisma',
      'Neon',
      'PostgresSQL',
    ],
    linkGit: 'https://github.com/jacksonVargas/login-better-auth',
    linkPrev: 'https://login-better-auth.vercel.app/login',
  },
]
