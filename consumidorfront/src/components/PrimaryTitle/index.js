import { Container, H1 } from "./styles";

export function PrimaryTitle(texto) {
  return (
    <Container>
      <H1>{texto.texto}</H1>
    </Container>
  );
}
