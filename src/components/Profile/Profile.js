import React from "react";
import PropTypes from "prop-types";

// import "./Profile.scss";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className="profile">
      <div className="profile-description">
        <img src={avatar} alt={name} className="profile-avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-stats">
        <li>
          <span className="profile-label">Followers</span>
          <span className="profile-quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="profile-label">Views</span>
          <span className="profile-quantity">{stats.views}</span>
        </li>
        <li>
          <span className="profile-label">Likes</span>
          <span className="profile-quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
