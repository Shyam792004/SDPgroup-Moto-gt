import { useSelector } from 'react-redux';
import './UserProfile.css';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more user details here as needed */}
    </div>
  );
};

export default UserProfile;
