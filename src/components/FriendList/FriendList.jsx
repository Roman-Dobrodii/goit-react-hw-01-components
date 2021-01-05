import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';

function FriendList({ friends }) {
  return <ul className={styles.friendList}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
