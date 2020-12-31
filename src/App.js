import Profile from './components/Profile/Profile';
import user from './data-base/user.json';
import statisticalData from './data-base/statistical-data.json';
import friends from './data-base/friends.json';
import transactions from './data-base/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
}
