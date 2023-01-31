import { useState } from 'react';
export function useToggle(on: boolean): [boolean, () => void] {
  const [state, setState] = useState(on);
  const toggler = () => {
    setState((prev => !prev))
  }

  return [state, toggler]
}
