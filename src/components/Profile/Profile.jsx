import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import "./Profile.scss";

const ProfilePage = () => {
  const { user, userdata } = useContext(UserContext);
  const userd = userdata ? JSON.parse(userdata) : null;

  return (
    <div className="profile-container">
      <div className="user-info">
      <h1 className="heading">My Profile</h1>
      {user ? (
        <div>
          
          <img className="profile-image" src={userd.image} alt="user avatar" />
          <div className="card-info">
            <p>Name: {userd.firstName}</p>
            <p>Username: {userd.username}</p>
            <p>Email: {userd.email}</p>
          </div>
        </div>
      ) : (
        <p className="no-data-message">No user data available.</p>
      )}
      </div>
    </div>
  );
};

export default ProfilePage;
