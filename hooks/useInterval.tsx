import { useRef, useEffect } from 'react'

/**
 *
 * sample reusable setInterval hook given delay time and callback function.
 */
export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback?.current()
    }

    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
