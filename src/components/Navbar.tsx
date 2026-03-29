import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/professor/1">Alan Turing</Link></li>
        <li><Link to="/professor/2">Ada Lovelace</Link></li>
        <li><Link to="/professor/3">Grace Hopper</Link></li>
      </ul>
    </nav>
  );
}