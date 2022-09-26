import { FriendItem } from "components/FriendItem/FriendItem";
import { FriendsList } from "components/FriendList/FriendList.styled";

export const FriendList = ({ friends }) => {
    return  <FriendsList className="friend-list">
                {friends.map(friend => <FriendItem key={friend.id} friend={friend}/>)}
            </FriendsList>
}