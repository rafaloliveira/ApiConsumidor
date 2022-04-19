import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../components/Header";
import PageCard from "../../components/PageCard";
import { Container } from "./styles";
import { PageLink } from "../../components/PageLink";

export function Titulo1() {
  const [titulo1, setTitulo1] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/titulo1")
      .then((response) => response.json())
      .then((response) => setTitulo1(response));
  }, []);

  return (
    <Container>
      <Header />
      <PageLink />
      {titulo1.map((tit) => (
        <PageCard key={tit.art} item={tit} />
      ))}
    </Container>
  );
}
