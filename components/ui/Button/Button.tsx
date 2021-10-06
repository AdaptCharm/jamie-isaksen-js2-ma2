import { FC, ButtonHTMLAttributes, JSXElementConstructor } from 'react'
import cn from 'classnames'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  size?: Size
  color?: Color
  Component?: string | JSXElementConstructor<any>
  children?: string | React.ReactNode
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Color = 'black' | 'white'

const Button: FC<Props> = ({
  className,
  size = 'sm',
  color = 'black',
  Component = 'button',
  children,
}) => {
  return (
    <Component
      className={cn(
        'inline-flex items-center border rounded-md transition ease-default focus:outline-none focus:ring-transparent',
        {
          'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white':
            color === 'black',
          'text-gray-500 bg-white border-bg-gray-200 hover:border-black hover:text-black':
            color === 'white',
          'px-2.5 py-1.5 text-xs': size == 'xs',
          'px-3 py-2 text-sm': size == 'sm',
          'px-4 py-2 text-sm': size == 'md',
          'px-4 py-2': size == 'lg',
          'px-6 py-3': size == 'xs',
        },
        className
      )}
      type='submit'
    >
      {children}
    </Component>
  )
}

export default Button
