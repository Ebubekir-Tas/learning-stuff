import { counterState } from '../../Recoil';
import { useRecoilState } from 'recoil';
import './styles.css';

export const Increment = () => {
  const [count, setCount] = useRecoilState(counterState);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter-container">
      <button 
        className="counter-btn"
        onClick={incrementCount}
      >
        Increment:
      </button>
      <h1 style={{ color: 'blue' }}>Count: {count}</h1>
    </div>
  )
}