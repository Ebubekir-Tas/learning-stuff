import { CachedMessage } from './React-Query/CachedMessage';
import useMsg from './Hooks/useMsg';
import logo from './logo.svg';
import './App.css';

function App() {
  const { isLoading, data, error } = useMsg();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {isLoading && 'Fetching data'}
          {data?.message}
          {error && 'error fetching'}
        </h1>
        <CachedMessage />
      </header>
    </div>
  );
}

export default App;
