import './App.css';

function App() {
  const handleButtonClick = () =>{
    window.alert("Hi")
  }
  return (
    <div className="App">
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
