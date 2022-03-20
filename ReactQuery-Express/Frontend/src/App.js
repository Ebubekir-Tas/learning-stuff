import { SampleUseMutate, SampleUseQuery } from './Components';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SampleUseMutate />
        <SampleUseQuery />
      </header>
    </div>
  );
};

export default App;
