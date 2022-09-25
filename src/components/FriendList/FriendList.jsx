import PropTypes from 'prop-types';
import { FriendItem } from "components/FriendItem/FriendItem";

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
            {friends.map(friend => <FriendItem key={friend.id} friend={friend}/>)}
    </ul>
}