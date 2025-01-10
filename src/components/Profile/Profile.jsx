import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css['profile-user-info']}>
        <img
          src={image}
          alt="User Avatar"
          className={css['pofile-user-avatar']}
        />
        <p className={css['profile-user-name']}>{name}</p>
        <p className={css['profile-user-tag']}>@{tag}</p>
        <p className={css['profile-user-location']}>{location}</p>
      </div>
      <ul className={css['profile-user-stats']}>
        <li className={css['profile-user-stats-item']}>
          <span className={css['profile-user-item-title']}>followers</span>
          <span className={css['profile-user-item-value']}>{followers}</span>
        </li>
        <li className={css['profile-user-stats-item']}>
          <span className={css['profile-user-item-title']}>views</span>
          <span className={css['profile-user-item-value']}>{views}</span>
        </li>
        <li className={css['profile-user-stats-item']}>
          <span className={css['profile-user-item-title']}>likes</span>
          <span className={css['profile-user-item-value']}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
