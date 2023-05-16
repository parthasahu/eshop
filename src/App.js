import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './components/auth/signUp/SignUp';
import Header from './components/header/Header'
import Signin from './components/auth/singIn/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='header'><Header /></div>
        <div className='content'>
          <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <footer className='footer'>&copy; upGrad 2023</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
