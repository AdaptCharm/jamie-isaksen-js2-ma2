import cn from 'classnames'
import { FC, ReactNode, Component } from 'react'
import s from './Flex.module.css'

interface Props {
  className?: string
  flex?: Flex
  items?: Items
  justify?: Justify
  wrap?: Wrap
  gap?: Gap
  children?: ReactNode[] | Component[] | any[]
}

type Flex = 'row' | 'row-reverse' | 'col' | 'col-reverse'

type Items = 'start' | 'center' | 'end' | 'stretch' | 'baseline'

type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap'

type Gap = 'xs' | 'sm' | 'md' | 'lg'

const Flex: FC<Props> = ({
  className,
  flex,
  items,
  justify,
  wrap,
  gap,
  children,
}) => {
  return (
    <div
      className={cn(
        s.root,
        {
          [s.flexRow]: flex === 'row',
          [s.flexRowReverse]: flex === 'row-reverse',
          [s.flexCol]: flex === 'col',
          [s.flexColReverse]: flex === 'col-reverse',
          [s.itemsStart]: items === 'start',
          [s.itemsCenter]: items === 'center',
          [s.itemsEnd]: items === 'end',
          [s.itemsStretch]: items === 'stretch',
          [s.itemsBaseline]: items === 'baseline',
          [s.justifyStart]: justify === 'start',
          [s.justifyCenter]: justify === 'center',
          [s.justifyEnd]: justify === 'end',
          [s.justifyBetween]: justify === 'between',
          [s.justifyAround]: justify === 'around',
          [s.justifyEvenly]: justify === 'evenly',
          [s.wrap]: wrap === 'wrap',
          [s.wrapReverse]: wrap === 'wrap-reverse',
          [s.wrapNoWrap]: wrap === 'nowrap',
          [s.wrapNoWrap]: wrap === 'nowrap',
          [s.gapXs]: gap === 'xs',
          [s.gapSm]: gap === 'sm',
          [s.gapMd]: gap === 'md',
          [s.gapLg]: gap === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Flex
