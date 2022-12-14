import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

const FriendsList = ({ friends, children }) => {
  return <ul className={css.list}>{children}</ul>;
};

FriendsList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  children: PropTypes.element,
};

export default FriendsList;
