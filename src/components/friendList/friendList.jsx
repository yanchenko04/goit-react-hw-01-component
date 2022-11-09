import FriendListItem from './friendListItem';
import friends from './friends'
import css from './friendList.module.css'


export default function FriendList(){
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem
                id = {friend.id}
                avatar={friend.avatar}
                name ={friend.name}
                isOnline={friend.isOnline}
                />

            ))}

        </ul>
    )
}