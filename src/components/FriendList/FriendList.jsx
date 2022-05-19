import s from "./FriendList.module.css"
import PropTypes from "prop-types"

const FriendList = ({ friends }) => {
     
    const elements = friends.map(friend => (<li key={ friend.id}className={s.item}>
        <span className={s.status} style={{backgroundColor: friend.isOnline ? '#7CFC00' : '#800000'}}></span>
        <img src={friend.avatar} alt={friend.name} width="48" height='48' className={s.img}/>
        <p className={s.name}>{ friend.name}</p>
    </li>))
    return (<ul className={s.list}>
        {elements}
    </ul>)
}
export default FriendList

FriendList.defaultProps = {
    friends: []
}
    
FriendList.propTypes = {
    alt: PropTypes.string,
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}