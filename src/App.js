import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState("sakuragi");

  const increment = () => {
    setCount(count + "sakuragi");
    console.log(count);
  };

  return (
    <div>
      <button onClick={increment}>add</button>
      {count}
    </div>
  );
}




export default App;
