import css from './FriendListItem.module.css';
import clsx from 'clsx';
console.log('FriendListItem css:', css);

const FriendListItem = ({ avatar, name, isOnline }) => {
  console.log(avatar, name, isOnline);
  return (
    <div className="friend-list-item">
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className="friend-list-item-avatar"
      />
      <p className="friend-list-item-name">{name}</p>
      <p
        className={clsx(css['friend-list-item-status'], {
          [css['is-online']]: isOnline,
        })}
      >
        {isOnline ? 'on' : 'off'}line
      </p>
    </div>
  );
};

export default FriendListItem;
