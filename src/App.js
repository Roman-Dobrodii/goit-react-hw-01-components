import Profile from './components/Profile/Profile';
import user from './data-base/user.json';

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
