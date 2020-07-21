import React from 'react';
import "./App.css";
import Card from "./Card";

const sampleArray = [
  { id: 1, name: 'aaa', date: 19921123 },
  { id: 2, name: 'bbb', date: 19921124 },
  { id: 3, name: 'ccc', date: 19921125 },
  { id: 4, name: 'ddd', date: 19921126 },
  { id: 5, name: 'eee', date: 19921127 }
];

function App() {

  return (
    <div>
      {sampleArray.map((data, index) => {
        return (
          <Card key={index} id={data.id} name={data.name} date={data.date} />
        )
      })}
    </div>
  );
}

export default App;
