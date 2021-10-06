import { FC, ComponentType, HTMLAttributes } from 'react'
import cn from 'classnames'
import s from './Element.module.css'

interface Props {
  className?: string
  type?: Type
  variant?: Variant
  shadow?: boolean
  clean?: boolean
  children?: any
}

type Type = 'div' | 'section'

type Variant = 'white' | 'black' | 'gray'

const Element: FC<Props> = ({
  className,
  type = 'div',
  variant = 'white',
  shadow = true,
  clean = false,
  children,
}) => {
  const Component: ComponentType<any> | string = type as any

  return (
    <Component
      className={cn(
        s.root,
        {
          [s.shadow]: shadow,
          'py-8 xl:py-12': !clean,
          'bg-white dark:bg-black': variant === 'white',
          'bg-black dark:bg-white': variant === 'black',
          'bg-accents-1 dark:bg-accents-8': variant === 'gray',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Element
