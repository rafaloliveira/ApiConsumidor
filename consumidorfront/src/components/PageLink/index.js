import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Container } from "./styles";

export function PageLink() {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none", color: "#028C3E" }}>
        <FaHome size={30} />
      </Link>
    </Container>
  );
}
