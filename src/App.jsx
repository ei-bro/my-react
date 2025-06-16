import React from 'react';
import './app.css';

function App() {
  return (
    <div className='container'>
      <h1 className='header'>My React App</h1>
      <div className='card'>
        <h2 className='card-title'>Card Title</h2>
        <p className='card-description'>
          This is a simple card with a title and description.
        </p>
        <button className='button'>Click Me</button>
        <input type='text' className='input' placeholder='Enter text' />
      </div>
      <div className='card'>
        <h2 className='card-title'>Card Title</h2>
        <p className='card-description'>
          This is a simple card with a title and description.
        </p>
        <button className='button'>Click Me</button>
        <input type='text' className='input' placeholder='Enter text' />
      </div>
    </div>
  );
}
export default App;
