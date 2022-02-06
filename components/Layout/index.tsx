import React, { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

interface IProps {
  children: ReactNode
}

function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <div className="flex-1 flex item-stretch gap-5">
        <aside className="w-1/4">
          <Sidebar />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

export default Layout
