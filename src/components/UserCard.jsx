import { useNavigate } from 'react-router-dom'; //importa hook necessária do react-router-dom
import './UserCard.css'; // importa a estilização do userCard

function UserCard({user}) {
    
    const navigate = useNavigate();
    // navega para /user/<id do user específico>
    const pagUpdate = () => {
        navigate(`/user/${user.id}`);
    };  

    //retorna a vizualização de um card (na dashboard aparece mais de um por página)
    //recebe a estilização e ao ser clicado aciona a função pagUpdade
    //exibe as informações do usuário como imagem, nome completo (primeiro + ultimo), email e endereço
    return(
        
        <div className="user-card" onClick={pagUpdate}>
        

            <img src={user.avatar} alt={`${user.firstName} avatar`} />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
            <small>{user.address}</small>

        </div>

    );

}

export default UserCard;
