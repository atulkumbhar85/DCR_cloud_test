import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState({name:"default"})
  const handleButtonClick = () =>{
    const res = fetch("https://cloud.shriswamisamarth.site/test/api/user")
    setData(res)
    console.log(res);
  }
  return (
    <div className="App">
      <button onClick={handleButtonClick}>Click me</button>
      <h1>{data.name}</h1>
    </div>
  );
}

export default App;
