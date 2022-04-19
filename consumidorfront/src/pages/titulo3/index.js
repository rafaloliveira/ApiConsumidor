import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import PageCard from "../../components/PageCard";
import { PageLink } from "../../components/PageLink";
import { Container } from "./styles";

export function Titulo3() {
  const [titulo3, setTitulo3] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/titulo3")
      .then((response) => response.json())
      .then((response) => setTitulo3(response));
  }, []);
  return (
    <Container>
      <Header />
      <PageLink />
      {titulo3.map((tit) => (
        <PageCard key={tit.art} item={tit} />
      ))}
    </Container>
  );
}
