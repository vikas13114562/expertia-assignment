
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Register from './components/register/Register';
import Login from './components/register/Login';


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Register />} />
          <Route path='/dashboard' element = {<Dashboard />} />
          <Route path='/login' element = {<Login />} />
        </Routes>
      </BrowserRouter>
      
      
   </>
  );
}

export default App;
