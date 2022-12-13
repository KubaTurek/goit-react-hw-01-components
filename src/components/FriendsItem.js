import PropTypes from "prop-types";
import css from './FriendsItem.module.css';
import friends from './friends.json'


const FriendsItem = ({avatar, name, isOnline}) => {

return(

friends.map((friend) => {

    return(
    <li key={friend.id} className={css.item}>
    {friend.isOnline ? (<span className={css.online}></span>) : (<span className={css.offline}></span>)}
    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>)
}

))
};

FriendsItem.propTypes = {

    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendsItem;