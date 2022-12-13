import PropTypes from "prop-types";
import css from './FriendsList.module.css'

const FriendsList = ({friends, children}) => {
   
return (
<ul className={css.list}>
  {children}
</ul>)

}

FriendsList.propTypes = {

    friends: PropTypes.object, 
    children: PropTypes.element
}

export default FriendsList;