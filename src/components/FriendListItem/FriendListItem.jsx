import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css['friend-list-item']}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={css['friend-list-item-avatar']}
      />
      <p className={css['friend-list-item-name']}>{name}</p>
      <p
        className={clsx(css['friend-list-item-status'], {
          [css['is-online']]: isOnline,
        })}
      >
        {isOnline ? 'on' : 'off'}line
      </p>
    </li>
  );
};

export default FriendListItem;
