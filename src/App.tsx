import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import Select from 'react-select';
// import { Button, Input } from '@kamrucci/components';
// import Components from './Components';
import { isString } from 'lodash';
import { Button } from '@kamrucci/components';
// import { add } from '@kamrucci/utils';
import { TestComponent } from '@harish1993/react-component-library'

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
        {/* <Components /> */}
        <Button text="asd" />
        {/* <Input /> */}
        <TestComponent heading='asd' content='qwe' />
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
        {/* {add(3, 1)} */}
      </header>
    </div>
  );
}

export default App;
