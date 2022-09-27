import { UserProfile } from "components/UserProfile/UserProfile";
import { Statistics } from "components/statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import { Wrapper } from "components/App.styled";
import user from "components/data/user.json";
import data from "components/data/data.json";
import friends from "components/data/friends.json";
import transactions from "components/data/transactions.json";

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
