import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({ name: "default" });
  const handleButtonClick = async () => {

    axios.get("https://cloud.shriswamisamarth.site/test/api/user")
    .then(response => {
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
      setData(response.data);
    })
    // const res = await fetch("https://cloud.shriswamisamarth.site/test/api/user");
    
    // console.log('====================================');
    // console.log(res.json());
    // console.log('====================================');
      // .then((res) => {
      //   if (res) {
      //     console.log(res.json());
      //     setData(res);
      //   }
      // })
      // .catch((err) => {
      //   console.log("====================================");
      //   console.log(err);
      //   console.log("====================================");
      // });

    // setData(res)
    // console.log(res);
  };
  return (
    <div className="App">
      <button onClick={handleButtonClick}>Click me</button>
      <h1>{data.name}</h1>
    </div>
  );
}

export default App;
