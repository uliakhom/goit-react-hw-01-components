import PropTypes from "prop-types"
import s from './Profile.module.css'

const Profile = ({ avatar, username, tag, location, stats }) => {
    
        return (<div className={s.profile}>
        <div className={s.description}>
            <img src={avatar} className={s.img} alt="User" />
            <p className={s.username}>{ username}</p>
            <p className={s.tag}>@{ tag}</p>
            <p className={s.location}>{ location}</p>
        </div>
        <ul className={s.list}>
            <li className={s.item}>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{stats.followers}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{ stats.views}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{ stats.likes}</span>
            </li>
        </ul>
            </div>)
}

export default Profile 


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}


