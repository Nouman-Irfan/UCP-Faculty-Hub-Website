import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const ScrollToTop = () => {
  const location = useLocation()
  const navigationType = useNavigationType()
  const firstLoad = useRef(true)

  useLayoutEffect(() => {
    const key = `scroll-${location.key}`
    const navigation = performance.getEntriesByType('navigation')[0]
    const isRefresh = firstLoad.current && navigation?.type === 'reload'

    if (isRefresh) {
      window.scrollTo(0, 0)
    } else if (navigationType === 'POP') {
      const savedPosition = sessionStorage.getItem(key)

      if (savedPosition) {
        window.scrollTo(0, Number(savedPosition))
      } else {
        window.scrollTo(0, 0)
      }
    } else {
      window.scrollTo(0, 0)
    }

    firstLoad.current = false

    return () => {
      sessionStorage.setItem(key, window.scrollY.toString())
    }
  }, [location.key, navigationType])

  return null
}

export default ScrollToTop