import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friendlist/Friendslist';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json'
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import '../index.css';


export const App = () => {
  return (
    <div className={"app"}>
      <Profile {...user} />
      <Statistics title="Upload data" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
