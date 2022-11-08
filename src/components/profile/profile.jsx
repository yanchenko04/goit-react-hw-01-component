
import PropTypes from 'prop-types'
import css from '../profile/profile.module.css'


export default function Profile(props){
    const { avatar, username, tag, followers, location, views, likes} = props;
    return  <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}a</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.list}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}> {followers}</span>
      </li>
      <li className={css.list}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}> {views}</span>
      </li>
      <li className={css.list}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}> {likes}</span>
      </li>
    </ul>
  </div>

} 

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,



}
