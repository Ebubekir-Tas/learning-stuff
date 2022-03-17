import { useState } from 'react';
import { counterState } from '../../Recoil';
import { useRecoilState } from 'recoil';
import './styles.css';

export const AddByAmount = () => {
  const [count, setCount] = useRecoilState(counterState);
  const [input, setInput] = useState(0)

  const addByAmount = () => {
    setCount((prev)=> (prev + input));
  };
  return (
    <div className="input-container">
      <input
        type="text"
        onChange={(val)=> setInput(parseInt(val.target.value))}
      />
      <button onClick={addByAmount}>Add By Amount</button>
      <div>
        <h1>Count: {count}</h1>
      </div>
    </div>
  )
}
