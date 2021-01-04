import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return <ul className={styles.friendList}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
