import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import PageCard from "../../components/PageCard";
import { PageLink } from "../../components/PageLink";
import { Container } from "./styles";

export function Titulo6() {
  const [titulo6, setTitulo6] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/titulo6")
      .then((response) => response.json())
      .then((response) => setTitulo6(response));
  }, []);
  return (
    <Container>
      <Header />
      <PageLink />
      {titulo6.map((tit) => (
        <PageCard key={tit.art} item={tit} />
      ))}
    </Container>
  );
}
