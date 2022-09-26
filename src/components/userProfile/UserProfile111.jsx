import PropTypes from 'prop-types';
import { Profile, ProfileImg, Description, Name, TagLocation, Stats, StatsItem, Lable, Quantity} from "components/userProfile/UserProfile.styled";
export const UserProfile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return <Profile>
  <Description>
    <ProfileImg
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <TagLocation>@{tag}</TagLocation>
    <TagLocation>{location}</TagLocation>
  </Description>

  <Stats>
    <StatsItem>
      <Lable>Followers</Lable>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Lable>Views</Lable>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Lable>Likes</Lable>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </Stats>
</Profile>
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,})
}