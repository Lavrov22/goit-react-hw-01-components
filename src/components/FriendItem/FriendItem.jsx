import PropTypes from 'prop-types';
import { Item, Name, Online } from "components/FriendItem/FriendItem.styled";

export const FriendItem = ({ friend: {avatar, name, isOnline, id} }) => {
    return  <Item className="item">
                <Online className="status" status={isOnline}></Online>
                <img className="avatar" src={avatar} alt="{name}avatar" width="48" />
                <Name className="name">{name}</Name>
            </Item>
}

FriendItem.propType = {
    friend: PropTypes.arrayOf({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
}