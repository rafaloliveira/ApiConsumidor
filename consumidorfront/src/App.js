import { useEffect, useState } from "react";
import "./App.css";
import { Router } from "./routes";

function App() {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("http://localhost:8080/titulo1")
      .then((response) => response.json())

      .then((response) => setData(response));
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
