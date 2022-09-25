import { UserProfile } from "components/userProfile/UserProfile";
import { Statistics } from "components/statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import user from "components/data/user.json";
import data from "components/data/data.json";
import friends from "components/data/friends.json";

export const App = () => {
  return (
    <div>
      <UserProfile  username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};  
