import classNames from 'classnames'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: ReactNode
  isActive?: boolean
}

function SidebarButton({ title, icon, onClick, isActive }: IProps) {
  const buttonClassNames = classNames('w-full p-3 rounded-l text-left', {
    'bg-white font-bold': isActive
  })

  return (
    <button className={buttonClassNames} onClick={onClick}>
      <div className="flex items-center space-x-2">
        {icon}
        <span>{title}</span>
      </div>
    </button>
  )
}

export default SidebarButton
