import AuthContext from '../context/authcontext'
import { useContext } from 'react'


const ProfilePage = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
       <div className="card container" style={{width: 800}}>
  <img src={user.image} className="card-img-top" alt={user.user_name} />
  <div className="card-body">
    <h2 className="card-title">{user.user_name}</h2>
    <p className="card-text">{user.id}</p>
    </div>
</div>


    </>
  )
}

export default ProfilePage