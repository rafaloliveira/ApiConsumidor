import { Container, FlagOfBrazil, H1 } from "./styles";

const flag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png";

export function Header() {
  return (
    <Container>
      <FlagOfBrazil src={flag} alt="brasão República" />
      <H1>Código de defesa do Consumidor</H1>
    </Container>
  );
}
