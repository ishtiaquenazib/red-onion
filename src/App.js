import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import NotDound from './components/Shared/NotFound/NotDound';
import Home from './components/Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotDound/>}/>
      </Routes>
    </div>
  );
}

export default App;
