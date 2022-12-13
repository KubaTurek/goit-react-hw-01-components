import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './Friendslist';
import FriendsItem from './FriendsItem';
import TransactionHistory from './TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json'

export const App = () => {
  return (
    <div
      style={{
      
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(218, 218, 242)',
        paddingTop: '30px',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload data" stats={data} />
      <FriendsList>
        <FriendsItem {...friends} />
      </FriendsList>
      <TransactionHistory items={transactions} />
    </div>
  );
};
