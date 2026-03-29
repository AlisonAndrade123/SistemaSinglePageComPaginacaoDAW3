import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/professor/1">Hugo Feitosa</Link></li>
        <li><Link to="/professor/2">Andre Atanasio</Link></li>
        <li><Link to="/professor/3">Alvoro Magnus</Link></li>
      </ul>
    </nav>
  );
}