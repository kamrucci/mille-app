import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import { add } from '@kamrucci/utils';
import Select from 'react-select';
import { Button, Input } from '@kamrucci/components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanillas' },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Button text="asd" />
        <Input />
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{add(1, 6)}</h1>
      </header>
    </div>
  );
}

export default App;
