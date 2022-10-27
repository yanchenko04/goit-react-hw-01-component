import FriendListItem from './friendListItem';
import friends from './friends'


export default function FriendList(){
    return (
        <ul class="friend-list">
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