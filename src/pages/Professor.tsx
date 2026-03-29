import { useParams } from 'react-router-dom';
import { useState, useEffect, type FormEvent } from 'react'; 
import { professores } from '../data/professores';
import type { ContatoForm } from '../types';

export function ProfessorPage() {
  const { id } = useParams();
  const professor = professores.find(p => p.id === id);
  const estadoInicial: ContatoForm = { aluno: '', assunto: '', mensagem: '' };
  const [formData, setFormData] = useState<ContatoForm>(estadoInicial);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFormData(estadoInicial);
  }, [id]);

  if (!professor) return <h2>Professor não encontrado.</h2>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    
  };

  const fecharModalEResetar = () => {
    setShowModal(false);
    setFormData(estadoInicial);
  };

  return (
  <div className="container">
    <div style={{ borderBottom: '2px solid var(--ifpb-cinza-claro)', paddingBottom: '10px' }}>
      <h1>{professor.nome}</h1>
      <p style={{ margin: '5px 0', color: '#666' }}>{professor.bio}</p>
    </div>

    <div className="professor-content">
      <div className="col-esquerda">
        <h3>Disciplinas do Semestre</h3>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          {professor.disciplinas.map((d, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{d.nome}</strong> <br />
              <small style={{ color: '#777' }}>{d.curso} | {d.semestre}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-direita">
        <h3>Enviar Mensagem</h3>
        <form onSubmit={handleSubmit} className="contato-form">
          <input 
            placeholder="Seu Nome" 
            required 
            value={formData.aluno}
            onChange={e => setFormData({...formData, aluno: e.target.value})}
          />
          <input 
            placeholder="Assunto" 
            required 
            value={formData.assunto}
            onChange={e => setFormData({...formData, assunto: e.target.value})}
          />
          <textarea 
            placeholder="Sua mensagem..." 
            rows={5}
            required 
            value={formData.mensagem}
            onChange={e => setFormData({...formData, mensagem: e.target.value})}
          />
          <button type="submit" className="btn-enviar">Enviar Agora</button>
        </form>
      </div>
    </div>

    {showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 style={{ color: 'var(--ifpb-verde)', marginTop: 0 }}>Enviado!</h2>
          <p><strong>Aluno:</strong> {formData.aluno}</p>
          <p><strong>Assunto:</strong> {formData.assunto}</p>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>"{formData.mensagem}"</p>
          <button onClick={fecharModalEResetar} className="btn-enviar" style={{ width: '100%' }}>Fechar</button>
        </div>
      </div>
    )}
  </div>
);
}