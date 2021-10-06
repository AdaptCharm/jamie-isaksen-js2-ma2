import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import s from './Spacer.module.css'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  inline?: boolean
  w?: number
  h?: number
}

const Spacer: FC<Props> = ({ className, inline = true, w, h, ...props }) => {
  return (
    <span
      className={cn(
        s.root,
        {
          [s.isBlock]: !inline,
          [s.isInlineBlock]: inline,
          ...props,
        },
        className
      )}
      style={{
        width: w,
        height: h,
      }}
    />
  )
}

export default Spacer
