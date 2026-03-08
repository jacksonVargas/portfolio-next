import { StaticImageData } from 'next/image'

// Imagens
import devControle from '@/assets/dev-controle.png'
import login from '@/assets/login.png'
import devGames from '@/assets/dev-games.png'

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
    tecs: ['Next', 'Typescript', 'Shadcn', 'Api-Routes', 'Tailwindcss', 'Prisma', 'Neon', 'PostgresSQL'],
    linkGit: 'https://github.com/jacksonVargas/controle',
    linkPrev: 'https://controle-mauve-seven.vercel.app/dashboard',
  },
  {
    id: 2,
    image: login,
    title: 'Login Better Auth',
    info: 'Sistema de login com email/senha e login social usando better-auth.',
    tecs: ['Next', 'Typescript', 'Shadcn', 'Better-Auth', 'Tailwindcss', 'Prisma', 'Neon', 'PostgresSQL'],
    linkGit: 'https://github.com/jacksonVargas/login-better-auth',
    linkPrev: 'https://login-better-auth.vercel.app/login',
  },
  {
    id: 3,
    image: devGames,
    title: 'DevGames',
    info: 'DevGames é um site estilo uma Netflix, só que de jogos.',
    tecs: ['Next', 'Typescript', 'Shadcn', 'Tailwindcss', 'Api'],
    linkGit: 'https://github.com/jacksonVargas/dev-games',
    linkPrev: 'https://dev-games-seven.vercel.app',
  },
]
