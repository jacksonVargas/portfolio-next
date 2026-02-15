'use client'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'

// Componentes
import { ModeToggle } from '@/components/mode-toggle'

// Interface
export interface MenuLinks {
  label: string
  href: string
  onClick?: () => void
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const links: MenuLinks[] = [
    {
      href: '#hero',
      label: 'Início',
    },
    {
      href: '#about',
      label: 'Sobre',
    },
    {
      href: '#skills',
      label: 'Skills',
    },
    {
      href: '#projects',
      label: 'Projetos',
    },
  ]

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => removeEventListener('mousedown', handleClick)
  }, [isOpen])

  return (
    <>
      <header className='w-full fixed z-1 top-0 border-b bg-background'>
        <nav className='max-w-5xl mx-auto max-md:py-3 px-5 flex justify-between items-center'>
          <a href='#' className='text-xl'>
            JACKSON <span className='text-teal-500'>VARGAS</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden cursor-pointer hover:text-teal-500'
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <ul className='hidden md:flex items-center divide-x border-x'>
            {links.map((link, index) => (
              <a
                key={index}
                className='md:text-sm py-3 px-5  hover:text-teal-500'
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <ModeToggle />
          </ul>
        </nav>
      </header>

      {/* Menu mobile */}
      {isOpen && (
        <div
          ref={menuRef}
          className='md:hidden w-full min-h-screen max-w-70 bg-background px-5 py-3 fixed z-1 top-0 border-r'
        >
          <ul className='grid gap-3'>
            {links.map((link, index) => (
              <a
                key={index}
                className='md:text-sm py-2 px-3 border rounded  hover:text-teal-500 hover:border-teal-500'
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <div className='flex items-center gap-2 mt-2'>
              <a
                className='py-2 px-3 border rounded hover:text-teal-500 hover:border-teal-500'
                href='#'
                target='_blank'
              >
                <Github size={20} />
              </a>

              <a
                className='py-2 px-3 border rounded hover:text-teal-500 hover:border-teal-500'
                href='#'
                target='_blank'
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className='absolute bottom-20 w-fit border rounded'>
              <ModeToggle />
            </div>
          </ul>
        </div>
      )}
    </>
  )
}
