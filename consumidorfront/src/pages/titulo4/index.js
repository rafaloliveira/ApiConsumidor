import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import PageCard from "../../components/PageCard";
import { PageLink } from "../../components/PageLink";
import { Container } from "./styles";

export function Titulo4() {
  const [titulo4, setTitulo4] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/titulo4")
      .then((response) => response.json())
      .then((response) => setTitulo4(response));
  }, []);
  return (
    <Container>
      <Header />
      <PageLink />
      {titulo4.map((tit) => (
        <PageCard key={tit.art} item={tit} />
      ))}
    </Container>
  );
}
