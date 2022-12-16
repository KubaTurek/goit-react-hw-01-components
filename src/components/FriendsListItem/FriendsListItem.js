import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';
import friends from '../data/friends.json';

const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return friends.map(friend => {
    return (
      <li key={friend.id} className={css.item}>
        {friend.isOnline ? (
          <span className={css.online}></span>
        ) : (
          <span className={css.offline}></span>
        )}
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  });
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number
};

export default FriendsListItem;
