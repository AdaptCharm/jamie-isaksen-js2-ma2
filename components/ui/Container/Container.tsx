import { FC } from 'react'
import cn from 'classnames'
import s from './Container.module.css'

interface Props {
  className?: string
  fluid?: boolean
  children?: any
}

const Container: FC<Props> = ({ className, fluid, children }) => {
  return (
    <div className={cn(s.root, { [s.container]: !fluid }, className)}>
      {children}
    </div>
  )
}

export default Container
