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

    props.OnChangeName(newName);
  };

  return (
    <div className='child'>
      <h2>Child</h2>
      <div className='form'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='Type new Parent name'
            onChange={changeHandler}
            value={name}
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
