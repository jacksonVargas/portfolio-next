// Componentes
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { CodeXml, Palette, Zap } from 'lucide-react'

interface CardAboutProps {
  icon: React.ReactNode
  title: string
  body: string
}

export function CardAbout({ icon, title, body }: CardAboutProps) {
  const cards: CardAboutProps[] = [
    {
      icon: <CodeXml />,
      title: 'Código Limpo',
      body: 'Escrevo código organizado, escalável e seguindo as melhores práticas do mercado.',
    },
    {
      icon: <Palette />,
      title: 'Design Moderno',
      body: 'Interfaces elegantes e intuitivas que proporcionam a melhor experiência ao usuário.',
    },
    {
      icon: <Zap />,
      title: 'Performance',
      body: 'Aplicações rápidas e otimizadas, garantindo carregamento instantâneo.',
    },
  ]

  return (
    <div className='grid gap-3'>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardContent>
            <div className='w-full flex items-start gap-3'>
              <div className='p-3 rounded-full bg-teal-600 text-white'>
                {card.icon}
              </div>

              <div>
                <h3 className='text-lg text-teal-500'>{card.title}</h3>
                <p className='text-sm text-zinc-500'>{card.body}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
