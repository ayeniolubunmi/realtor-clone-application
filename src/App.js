import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sign-in' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/offer/:id' element={<Offers />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/forgotpassword' element={<ForgotPassword />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
