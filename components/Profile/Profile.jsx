import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="profile-user-info">
        <img src={image} alt="User's Photo" className="pofile-user-photo" />
        <p className="profile-user-name">{name}</p>
        <p className="profile-user-tag">@{tag}</p>
        <p className="profile-user-location">{location}</p>
      </div>
      <ul className="profile-user-stats">
        <li className="profile-user-followers">
          <span className="profile-user-followers-title">followers</span>
          <span className="profile-user-followers-value">{followers}</span>
        </li>
        <li className="profile-user-views">
          <span className="profile-user-views-title">views</span>
          <span className="profile-user-views-value">{views}</span>
        </li>
        <li className="profile-user-likes">
          <span className="profile-user-likes-title">likes</span>
          <span className="profile-user-likes-value">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
