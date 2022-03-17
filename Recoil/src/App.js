import { RecoilRoot } from 'recoil';
import { Increment, Decrement, AddByAmount } from './Components';
import './App.css';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <Increment />
      <Decrement />
      <AddByAmount />
    </div>
    </RecoilRoot>
  );
}

export default App;
