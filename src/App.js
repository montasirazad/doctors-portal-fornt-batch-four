import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/Login/Login/LogIn';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />

          {/* private route */}
          <Route path='/appointment' element={<PrivateRoute>
            <Appointment />
          </PrivateRoute>} />

          <Route path='/dashboard' element={<PrivateRoute>
            <DashBoard />
          </PrivateRoute>} />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
