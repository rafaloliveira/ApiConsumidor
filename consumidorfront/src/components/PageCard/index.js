import React from "react";
import {
  Art,
  Capitulo,
  Container,
  Inc,
  Lin,
  Par,
  Pu,
  Ses,
  Titulo,
} from "./styles";

export default function PageCard(item) {
  return (
    <Container>
      <Titulo>{item.item.titulo}</Titulo>
      <Capitulo>{item.item.capitulo}</Capitulo>
      <Art>{item.item.art}</Art>
      <Pu>{item.item.pu}</Pu>
      <Par>{item.item.par}</Par>
      <Inc>{item.item.inc}</Inc>
      <Lin>{item.item.lin}</Lin>
      <Ses>{item.item.ses}</Ses>
    </Container>
  );
}
