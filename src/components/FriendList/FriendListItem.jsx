import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';
import defaultImage from '../../img/default-avatar.jpg';

const FriendListItem = ({ avatar = defaultImage, name, id, isOnline }) => (
  <li key={id} className={styles.item}>
    {isOnline ? (
      <span className={`${styles.status} ${styles.online}`}></span>
    ) : (
      <span className={`${styles.status} ${styles.offline}`}></span>
    )}
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
