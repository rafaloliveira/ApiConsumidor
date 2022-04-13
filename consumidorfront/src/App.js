import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  return (
    <div className="App">
      <div className="fundo">
        <h1>
          Código de Defesa do Consumidor - Lei 8078/90 | Lei nº 8.078, de 11 de
          setembro de 1990
        </h1>
        <div>
          {" "}
          {data &&
            data.map((d) => (
              <div key={d.artigo}>
                <li>{d.artigo}</li>
                <li>{d.paragrafo}</li>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
