import classNames from 'classnames'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'danger' | 'success' | 'ghost'
}

function Button({ children, variant, ...rest }: IProps) {
  const buttonClassNames = classNames(
    'rounded p-2 font-bold disabled:cursor-not-allowed transition',
    { 'bg-red-500 disabled:bg-red-200 hover:bg-red-400 text-white': variant === 'danger' },
    { 'bg-green-500 disabled:bg-green-200 hover:bg-green-400 text-white': variant === 'success' },
    { 'bg-transparent text-black': variant === 'ghost' }
  )

  return (
    <button className={buttonClassNames} {...rest}>
      {children}
    </button>
  )
}

export default Button
