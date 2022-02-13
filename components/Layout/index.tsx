import React, { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
interface IProps {
  children: ReactNode
}

function Layout({ children }: IProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Header />
      </header>
      <div className="item-stretch container mx-auto flex flex-1">
        <aside className="w-1/4">
          <Sidebar />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

export default Layout
