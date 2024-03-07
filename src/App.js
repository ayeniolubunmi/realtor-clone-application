import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Offers from './pages/Offers';
import SignIn from './pages/signIn';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/offers' element={<Offers />}/>
          <Route path='/sign-in' element={<SignIn />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
