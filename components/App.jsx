import './App.css';
import Profile from './Profile/Profile.jsx';

function App() {
  return (
    <>
      <Profile
        name="Petra Marica"
        tag="pmarica"
        location="Salvador, Brasil"
        stats={{ followers: 1000, views: 2000, likes: 3000 }}
      />
    </>
  );
}

export default App;
