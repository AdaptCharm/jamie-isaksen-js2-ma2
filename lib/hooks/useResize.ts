import { useEffect, useCallback } from 'react'

export const useResize = (
  callback: () => unknown,
  immediatelyInvoke: boolean = true
): void => {
  const handleResize = useCallback(() => {
    callback()
  }, [callback])

  useEffect(() => {
    if (immediatelyInvoke) {
      handleResize()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize, immediatelyInvoke])
}
