import { useQuery } from 'react-query';
import logo from './logo.svg';
import './App.css';

const getUsers = async () => {
  const res = await fetch('http://localhost:3001/userMsg')
  return res.json();
}

function App() {
  const { data, isLoading, error } = useQuery('msg', getUsers)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {isLoading && 'Fetching data'}
          {data?.message}
          {error && 'error fetching'}
        </h1>
      </header>
    </div>
  );
}

export default App;
