import { useParams, useNavigate } from 'react-router-dom'; //importa os hooks necessários do react-router-dom
import { useEffect, useState } from 'react'; //importa os hooks necessário do react
import './UserDetail.css'; // importa a estilização

function UserDetail() {
  const { id } = useParams(); //pega o valor do :id na URL
  const navigate = useNavigate();// cria função de rota
  const [user, setUser] = useState(null); //determina variavel user de valor alterável pela função setUser

  //acessa os dados de um usuário/peoples específico do backend
  useEffect(() => {
    fetch(`http://localhost:3001/peoples/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Erro ao buscar usuário:', err)); //retorna mensagem de erro se não achar 
  }, [id]);

  if (!user) {
    return <p>Carregando usuário...</p>;
  }

  //retorna parte visivel
  return (
    <div className="user-detail" style={{ padding: '20px' }}>

      {/*botão para navegar para a rota anterior (dashboard)*/}
        <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
            Voltar
        </button>

      {/*título da div*/}
      <h2>Detalhes do Usuário</h2>

      {/*informações do usuários: imagem, nome, email e endereço*/}
      <img src={user.avatar} alt={`${user.firstName} avatar`} />
      <p><strong>Nome:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Endereço:</strong> {user.address}</p>
      
    </div>
  );
}

export default UserDetail;
