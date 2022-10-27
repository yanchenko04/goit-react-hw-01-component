import PropTypes from 'prop-types'


export default function FriendListItem({id, avatar, name, isOnline}){
    return(
<li class="item"
key = {id}>
  <span class="status">{isOnline ? ("OnLine") : ("OffLine")}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
  <p class="name">{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar : PropTypes.string,
    name : PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,

}