import { useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./App.css";


function App() {
  const [simpson, setSimpson] = useState({});

  const getSimpsons = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      console.log(data);
      setSimpson(data[0]);
    });
};

  return (
    <div className="App">
      <Card simpson={simpson}
            getSimpsons={getSimpsons}/>
    </div>
  );
};

export default App;
