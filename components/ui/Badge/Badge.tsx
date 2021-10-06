import { FC, ReactNode } from 'react'
import cn from 'classnames'
import s from './Badge.module.css'

interface Props {
  className?: string
  variant: Variant
  size?: Size
  children?: ReactNode | any
}

type Variant = 'blue' | 'red'

type Size = 'xs' | 'sm' | 'md' | 'lg'

const Badge: FC<Props> = ({ className, variant, size = 'xs', children }) => {
  return (
    <span
      className={cn(
        s.root,
        {
          [s.blue]: variant === 'blue',
          [s.red]: variant === 'red',
          [s.sizeXs]: size === 'xs',
          [s.sizeSm]: size === 'sm',
          [s.sizeMd]: size === 'md',
          [s.sizeLg]: size === 'lg',
        },
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
