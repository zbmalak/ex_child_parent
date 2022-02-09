import { useState } from 'react';
import Child from './components/Child';

import './App.css';

function App() {
  const [name, setName] = useState('Parent');

  const changeName = (name) => {
    setName(name);
  };

  return (
    <div className='parent'>
      <h2>{name}</h2>
      <Child onChangeName={changeName} />
    </div>
  );
}

export default App;

// Checking TEST
