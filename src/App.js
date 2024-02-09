import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import Navbar from './Allroutes/Navbar';
import MainRoute from './Allroutes/MainRoute';

function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <MainRoute/>
    </div>
  );
}

export default App;
