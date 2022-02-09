import { useState } from 'react';
import './Child.css';

function Child(props) {
  const [name, setName] = useState('');

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newName = name;
    props.onChangeName(newName);
    setName('');
  };

  return (
    <div className='child'>
      <h2>Child</h2>
      <div className='form'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={name}
            placeholder='Type new Parent name'
            onChange={changeHandler}
          />
          <div className='form'>
            <button>Click!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Child;
