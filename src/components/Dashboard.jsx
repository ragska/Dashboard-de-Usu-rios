import{ useEffect,useState } from 'react'; //importa as hooks necessárias do react
import UserCard from './UserCard'; // importa componente userCard
import './Dashboard.css'; // importa css do dashboard


function Dashboard() {

  //determina variaveis de estado mutável a partir da função set
  const [users, setUsers] = useState([]);
  //determina pagAtual iniciando em 1
  const [pagAtual, setPagAtual] = useState(1);
  
  const usersPag = 4; //define número de usuários por página


  const userMaxPag = pagAtual * usersPag;//define indice do ultimo usuário exibido na página
  const userMinPag = userMaxPag - usersPag;// defina o indice do primeiro usuário da página
  const usersAtual = users.slice(userMinPag, userMaxPag); //guarda os usuários exibidos na página a partir dos indices do primeiro e ultimo

  const totalPages = Math.ceil(users.length / usersPag); //conta que etermina quantas páginas terá (sempre arredonda pra cima)
  
  //arrow function para retornar uma página
  const anteriorPag = () => {
    if (pagAtual > 1) {
      setPagAtual(pagAtual - 1);
    }
  };
  //arrow function para avançar uma página
  const proxPag = () => {
    if (pagAtual < totalPages) {
      setPagAtual(pagAtual + 1);
    }
  };

  //acessa os dados do backend e armazena. caso não encontre, retorna mensagem de erro
  useEffect(() => {
    fetch('http://localhost:3001/peoples')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Erro ao buscar usuários:', err));
  }, []);

  //o que será exibido:
  return(
    <div className="App">
      <h1>Dashboard de Usuários</h1> {/*título da página*/}
      <p>Total de usuários: {users.length}</p> {/*exie o total de usuários*/}
      <div className="user-container">

        {/*exibe somente os usuários guardados no usersAtual*/}
        {usersAtual.map((user) => (
          {/*exibe o componente card conforme o id do usuário*/}
          <UserCard key= {user.id} user={user} />
        ))}
      </div>

      <div style={{marginTop: '20px'}}>
        {/*botão para retornar(aciona a função anteriorPag). desativa quando o valor da página atual for igual a 1*/}
        <button 
          onClick={anteriorPag} disabled={pagAtual === 1}>
          Anterior
        </button>
        {/*exibe a página atual e a ultima/total */}
        <span style={{margin: '0 10px'}}>
          {pagAtual}/{totalPages}
        </span>
        {/*botão para avançar(aciona a função proxPag). desativa quando o valor da página atual for igual a página total/ultima*/}
        <button onClick={proxPag} disabled={pagAtual === totalPages}>
          Próxima
        </button>

      </div>

    </div>

  );
}

export default Dashboard;
