import './App.css';
import Profile from './Profile/Profile.jsx';
import userData from '../db/userData.json';
import normalizeProfileProps from './Profile/normalizeProfileProps.js';

function App() {
  return (
    <>
      <Profile {...normalizeProfileProps(userData)} />
    </>
  );
}

export default App;
