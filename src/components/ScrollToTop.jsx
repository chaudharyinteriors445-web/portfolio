import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Resets scroll position on client-side navigation (e.g. footer links). */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    html.scrollTop = 0
    document.body.scrollTop = 0
    html.style.scrollBehavior = prev
  }, [pathname])

  return null
}
