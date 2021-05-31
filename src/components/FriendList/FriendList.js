import React from "react";
import PropTypes from "prop-types";
// import "./FriendList.scss";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className="friend-list-item">
        <span className={isOnline ? "status" : "status-noActiv"}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className={name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
