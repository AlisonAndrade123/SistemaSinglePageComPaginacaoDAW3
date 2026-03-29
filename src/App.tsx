import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProfessorPage } from './pages/Professor';
import './App.css';

function Home() {
  return (
    <div className="container">
      <h1 style={{ color: 'var(--ifpb-verde)' }}>Bem-vindo ao Portal Acadêmico IFPB</h1>
      <p>Utilize o menu superior para localizar os professores e entrar em contato diretamente.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professor/:id" element={<ProfessorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;