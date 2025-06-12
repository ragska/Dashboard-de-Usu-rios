import{ useEffect,useState } from 'react';
import UserCard from './UserCard';
import './Dashboard.css';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [pagAtual, setPagAtual] = useState(1);
  const usersPag = 4; //define número de usuários por página


  const userMaxPag = pagAtual * usersPag;
  const userMinPag = userMaxPag - usersPag;
  const usersAtual = users.slice(userMinPag, userMaxPag);

  const totalPages = Math.ceil(users.length / usersPag);
  const anteriorPag = () => {
    if (pagAtual > 1) {
      setPagAtual(pagAtual - 1);
    }
  };

  const proxPag = () => {
    if (pagAtual < totalPages) {
      setPagAtual(pagAtual + 1);
    }
  };


  useEffect(() => {
    fetch('http://localhost:3001/peoples')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Erro ao buscar usuários:', err));
  }, []);

  return(
    <div className="App">
      <h1>Dashboard de Usuários</h1>
      <p>Total de usuários: {users.length}</p>
      <div className="user-container">
        {usersAtual.map((user) => (
          <UserCard key= {user.id} user={user} />
        ))}
      </div>

      <div style={{marginTop: '20px'}}>
        <button 
          onClick={anteriorPag} disabled={pagAtual === 1}>
          Anterior
        </button>

        <span style={{margin: '0 10px'}}>
          {pagAtual}/{totalPages}
        </span>

        <button onClick={proxPag} disabled={pagAtual === totalPages}>
          Próxima
        </button>

      </div>

    </div>

  );
}

export default Dashboard;