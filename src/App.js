import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/Login/Login/LogIn';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
