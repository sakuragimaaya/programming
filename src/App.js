import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const twoincrement = () => {
    setCount(count - 1);
    console.log(count);
  };
  const fromreset = () => {
    setCount(0);
    console.log(count);
  };

  return (
    <div>
      <button onClick={increment}>いいね！</button>
      <button onClick={twoincrement}>よくないね！</button>
      <button onClick={fromreset}>消す！</button>
      {count}
    </div>
  );
}




export default App;
