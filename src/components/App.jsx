import './App.css';
import Profile from './Profile/Profile.jsx';
import FriendList from './FriendList/FriendList.jsx';
import userData from '../db/userData.json';
import friends from '../db/friends.json';
import normalizeProfileProps from './Profile/normalizeProfileProps.js';

function App() {
  return (
    <>
      <Profile {...normalizeProfileProps(userData)} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
