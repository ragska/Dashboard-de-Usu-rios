import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './UserDetail.css'; // Import your CSS file for styling

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/peoples/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Erro ao buscar usuário:', err));
  }, [id]);

  if (!user) {
    return <p>Carregando usuário...</p>;
  }

  return (
    <div className="user-detail" style={{ padding: '20px' }}>
        <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
            Voltar
        </button>

      <h2>Detalhes do Usuário</h2>

      <img src={user.avatar} alt={`${user.firstName} avatar`} />
      <p><strong>Nome:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Endereço:</strong> {user.address}</p>
      
    </div>
  );
}

export default UserDetail;