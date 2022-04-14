import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [art, setArt] = useState([]);
  const artigos = art.artigos;
  console.log(artigos);
  console.log(art);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())

      .then((response) => setData(response));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())

      .then((response) => setArt(response));
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
              <div key={d.artigos}>
                <p>{d.capitulo}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
