import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import PageCard from "../../components/PageCard";
import { PageLink } from "../../components/PageLink";
import { Container } from "./styles";

export function Titulo5() {
  const [titulo5, setTitulo5] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/titulo5")
      .then((response) => response.json())
      .then((response) => setTitulo5(response));
  }, []);
  return (
    <Container>
      <Header />
      <PageLink />
      {titulo5.map((tit) => (
        <PageCard key={tit.art} item={tit} />
      ))}
    </Container>
  );
}
