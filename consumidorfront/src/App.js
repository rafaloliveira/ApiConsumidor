import { useEffect, useState } from "react";
import "./App.css";

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
      <div className="fundo">
        <h1>
          <center>
            Código de Defesa do Consumidor{" "}
            <p>Lei nº 8.078, de 11 de setembro de 1990</p>
          </center>
        </h1>
        <div>
          {data &&
            data.map((d) => (
              <div key={d.art}>
                <p>{d.titulo}</p>
                <p>{d.capitulo}</p>
                <p>{d.ses}</p>
                <p>{d.art}</p>
                <p>{d.pu}</p>
                <p>{d.par}</p>
                <p>{d.inc}</p>
                <p>{d.lin}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
