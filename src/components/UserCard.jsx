import { useNavigate } from 'react-router-dom';
import './UserCard.css';

function UserCard({user}) {
    const navigate = useNavigate();

    const pagUpdate = () => {
        navigate(`/user/${user.id}`);
    };  

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