import { Link } from "react-router-dom";
import { Cardtexto, Container, Cardtitulo } from "./styles";

export function Card(to) {
  console.log(to.to);
  return (
    <Container>
      <Cardtitulo> TituloI </Cardtitulo>
      <Cardtexto> Das Disposições Gerais </Cardtexto>
      <Link to={to.to}>link</Link>
    </Container>
  );
}
