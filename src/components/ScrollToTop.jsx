import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop