import { ReactNode } from 'react'

function Overlay({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60" />
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </>
  )
}

export default Overlay
