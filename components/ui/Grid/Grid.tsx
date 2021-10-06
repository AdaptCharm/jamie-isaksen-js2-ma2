import cn from 'classnames'
import { FC, ReactNode, Component } from 'react'
import s from './Grid.module.css'

interface Props {
  className?: string
  cols?: Cols
  gap?: Gap
  children?: ReactNode
}

type Cols = 1 | 2 | 3 | 4

type Gap = 'sm' | 'md' | 'lg'

const Grid: FC<Props> = ({ className, cols = 2, gap = 'md', children }) => {
  return (
    <div
      className={cn(
        s.root,
        {
          [s.colsOne]: cols === 1,
          [s.colsTwo]: cols === 2,
          [s.colsThree]: cols === 3,
          [s.colsFour]: cols === 4,
          [s.gapSmall]: gap === 'sm',
          [s.gapMedium]: gap === 'md',
          [s.gapLarge]: gap === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Grid
