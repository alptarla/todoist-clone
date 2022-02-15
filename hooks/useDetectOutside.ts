import { RefObject, useEffect, useState } from 'react'

function useDetectOutside(targetRef: RefObject<HTMLDivElement>, cb: VoidFunction) {
  const [isOutside, setIsOutside] = useState(false)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (targetRef.current?.contains(e.target as Node)) return
      setIsOutside(true)
      cb()
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [targetRef, cb])

  return isOutside
}

export default useDetectOutside
