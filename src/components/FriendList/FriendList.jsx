import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from './FriendList.module.css';
console.log('css:', css);

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        <FriendListItem {...friend} />;
      })}
    </ul>
  );
};

export default FriendList;
