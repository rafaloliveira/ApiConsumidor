import { Card } from "../../components/Card";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Card to="/titulo1" />
      <Card to="/titulo2" />
      <Card to="/titulo3" />
      <Card to="/titulo4" />
      <Card to="/titulo5" />
      <Card to="/titulo6" />
    </Container>
  );
}
