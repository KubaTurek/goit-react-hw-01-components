import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

const FriendsList = ({ friends}) => {
  return <ul className={css.list}>
    <FriendsListItem />
  </ul>;
};

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  children: PropTypes.element,
};

export default FriendsList;
