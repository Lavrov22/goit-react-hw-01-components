import PropTypes from 'prop-types';
import { Item, Name, Online } from "components/FriendItem/FriendItem.styled";

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
    return  <Item className="item">
                <Online className="status" status={isOnline}></Online>
                <img className="avatar" src={avatar} alt="{name}avatar" width="48" />
                <Name className="name">{name}</Name>
            </Item>
}

FriendItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}