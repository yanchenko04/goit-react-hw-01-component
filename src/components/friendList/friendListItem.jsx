import PropTypes from 'prop-types'

import css from './friendList.module.css'


export default function FriendListItem({id, avatar, name, isOnline}){
    return(
<li className={css.item}
key = {id}>
  <span className={`${css.status} ${css[isOnline]}`}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar : PropTypes.string,
    name : PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,

}