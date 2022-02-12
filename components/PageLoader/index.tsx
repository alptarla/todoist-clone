import React from 'react'
import { PuffLoader } from 'react-spinners'

function PageLoader() {
  return (
    <div className="grid h-full w-full place-items-center">
      <PuffLoader color="#ef4444" />
    </div>
  )
}

export default PageLoader
