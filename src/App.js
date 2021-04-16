import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'

const App = () =>{
  return (
    <div className="App">
      <Header />

      <Navigation />
      <Content />
    </div>
  );
}


export default App;
