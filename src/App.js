import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation.jsx'
import Profile from './components/Profile/Profile'

const App = () =>{
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}


export default App;
