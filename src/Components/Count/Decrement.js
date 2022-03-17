import { counterState } from "../../Recoil";
import { useRecoilState } from 'recoil';
import './styles.css';

export const Decrement = () => {
  const [count, setCount] = useRecoilState(counterState);

  const decrement = () => {
    setCount(count - 1)
  };
  return (
    <div className="counter-container">
      <button 
        className="counter-btn"
        onClick={decrement}
      >
        Decrement: 
      </button>
      <h1>Count: {count}</h1>
    </div>
  )
}