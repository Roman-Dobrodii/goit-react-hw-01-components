import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data-base/user.json';
import statisticalData from './data-base/statistical-data.json';
import friends from './data-base/friends.json';
// import transactions from './data-base/transactions.json';

export default function App() {
  return (
    <div className="container">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
}
