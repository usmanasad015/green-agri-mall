import { useEffect, useState } from 'react'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ scrollX: 0, scrollY: 0 })
  useEffect(() => {
    function updatePostion() {
      setScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePostion)
    updatePostion()
    return () => window.removeEventListener('scroll', updatePostion)
  }, [])

  return scrollPosition
}

export default useScrollPosition
