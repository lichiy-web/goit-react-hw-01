import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
        return <FriendListItem {...friend} key={friend.id} />;
      })}
    </ul>
  );
};

export default FriendList;
