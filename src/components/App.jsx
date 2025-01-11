import './App.css';
import Profile from './Profile/Profile.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import userData from '../db/userData.json';
import friends from '../db/friends.json';
import transactions from '../db/transactions.json';
import normalizeProfileProps from './Profile/normalizeProfileProps.js';

function App() {
  return (
    <>
      <Profile {...normalizeProfileProps(userData)} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
