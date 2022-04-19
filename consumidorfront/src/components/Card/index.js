import { Link } from "react-router-dom";
import { Cardtexto, Container, Cardtitulo } from "./styles";

export function Card(props) {
  console.log(props.to);
  console.log(props.titulo);
  return (
    <Container>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          padding: 15,
          width: "100%",
        }}
        to={props.to}
      >
        <Cardtitulo>{props.titulo}</Cardtitulo>
        <Cardtexto>{props.texto}</Cardtexto>
      </Link>
    </Container>
  );
}
