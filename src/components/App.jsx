import { UserProfile } from "components/UserProfile/UserProfile";
import { Statistics } from "components/statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import { Wrapper } from "components/App.styled";
import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

export const App = () => {
  return (
    <div>
      <Wrapper>
        <UserProfile  username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
        <FriendList friends={friends} />
    </Wrapper>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};  
