import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import PageCard from "../../components/PageCard";
import { PageLink } from "../../components/PageLink";
import { Container } from "./styles";

export function Titulo2() {
  const [titulo2, setTitulo2] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/titulo2")
      .then((response) => response.json())
      .then((response) => setTitulo2(response));
  }, []);
  return (
    <Container>
      <Header />
      <PageLink />
      {titulo2.map((tit) => (
        <PageCard key={tit.art} item={tit} />
      ))}
    </Container>
  );
}
