import { useEffect, EffectCallback } from 'react'

export function useEffectOnce(effect: EffectCallback) {
  useEffect(() => {
    return effect()
  }, [])
}
