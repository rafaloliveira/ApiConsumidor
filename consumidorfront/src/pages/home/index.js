import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Grid } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Grid>
        <Card
          titulo="Título I"
          texto="Dos Direitos do Consumidor"
          to="/titulo1"
        />
        <Card titulo="Título II" texto="Das Infrações Penais" to="/titulo2" />
        <Card
          titulo="Título III"
          texto="Da Defesa so Consumidor em Juízo"
          to="/titulo3"
        />
        <Card
          titulo="Título IV"
          texto="Do Sistema Nacional de Defesa do Consumidor"
          to="/titulo4"
        />
        <Card
          titulo="Título V"
          texto="Da Conveção Coletiva de Consumo"
          to="/titulo5"
        />
        <Card titulo="Título VI" texto="Disposições Finais" to="/titulo6" />
      </Grid>
    </Container>
  );
}
