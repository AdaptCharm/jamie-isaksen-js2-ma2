import {
  FC,
  ReactNode,
  ReactElement,
  ComponentType,
  JSXElementConstructor,
} from 'react'
import cn from 'classnames'
import s from './Text.module.css'

interface Props {
  className?: string
  variant?: Variant
  color?: Color
  children?: ReactNode | any
}

type Variant = 'heading' | 'subHeading' | 'paragraph'

type Color = 'black' | 'gray'

const Text: FC<Props> = ({
  className,
  variant = 'paragraph',
  color = 'black',
  children,
}) => {
  const components: {
    [P in Variant]: ComponentType<any> | string
  } = {
    heading: 'h1',
    subHeading: 'h2',
    paragraph: 'p',
  }

  const Component:
    | JSXElementConstructor<any>
    | ReactElement<any>
    | ComponentType<any>
    | string = components![variant!]

  return (
    <Component
      className={cn(
        {
          'text-6xl md:text-7xl font-extrabold tracking-tight':
            variant === 'heading',
          'text-2xl md:text-4xl tracking-tight leading-tight':
            variant === 'subHeading',
          'text-sm': variant === 'paragraph',
          'text-black dark:text-white': color === 'black',
          'text-accents-5 dark:text-accents-4': color === 'gray',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Text
