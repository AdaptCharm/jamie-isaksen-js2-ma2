import { FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
}

const Input: FC<InputProps> = ({ className, onChange, ...rest }) => {
  const handleOnChange = (evt: any) => {
    if (onChange) {
      onChange(evt.target.value)
    }
    return null
  }

  return (
    <input
      className={cn(
        'bg-white inline-flex w-full h-10 border border-accents-2 focus:border-black transition duration-150 pl-10 pr-3 rounded-md focus:outline-none focus:ring-0',
        className
      )}
      onChange={handleOnChange}
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'
      {...rest}
    />
  )
}

export default Input
