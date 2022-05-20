import PropTypes from "prop-types"
import s from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline }) => {
    return (<li className={s.item}>
        <span className={s.status} style={{backgroundColor: isOnline ? '#7CFC00' : '#800000'}}></span>
        <img src={avatar} alt={name} width="48" height='48' className={s.img}/>
        <p className={s.name}>{ name}</p>
    </li>)
}

export default FriendListItem

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    }