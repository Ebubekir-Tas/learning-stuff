import { useRecoilValue } from 'recoil';
import {
  Increment,
  Decrement,
  AddByAmount,
  CountSquared
} from './Components';
import { peopleSelector } from './Recoil/selectors';
import { counterState } from './Recoil';
import { Person } from './Components';
import './App.css';

function App() {
  // const count = useRecoilValue(counterState)
  // const people = useRecoilValue(peopleSelector)

  return (
    <div className="App">
      <Increment />
      <Decrement />
      <AddByAmount />
      <Person />
    </div>
  );
}

export default App;
