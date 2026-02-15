interface TitleProps {
  title: string
  span: string
}

export function Title({ title, span }: TitleProps) {
  return (
    <div className='text-center space-y-1 mb-10'>
      <h3 className='text-teal-500 text-3xl'>{title}</h3>
      <span className='text-zinc-500'>{span}</span>
    </div>
  )
}