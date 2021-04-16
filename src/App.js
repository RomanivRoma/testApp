import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) =>{
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Route path="/profile" component={Profile}/>
        <Route path="/dialogues" component={Dialogues}/>
      </div>
    </BrowserRouter>
  );
}


export default App;
