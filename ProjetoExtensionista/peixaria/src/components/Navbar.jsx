import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>Peixaria & Empório do Vale</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/sobre">Sobre nós</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
