import PropTypes from "prop-types"
import FriendListItem from "./FriendListItem"

const FriendList = ({ friends }) => {
     
    const elements = friends.map(({ id, ...props }) => <FriendListItem key={id} {...props}/>)
    return (<ul>
        {elements}
    </ul>)
}
export default FriendList

FriendList.defaultProps = {
    friends: []
}
    
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}