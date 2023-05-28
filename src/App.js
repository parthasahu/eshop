import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './components/auth/signUp/SignUp';
import Header from './components/header/Header'
import Signin from './components/auth/singIn/SignIn';
import { AppProvider } from './AppProvider'; 
import ProductsList from './components/products/productDisplayList'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="App">
          <div className='header'><Header /></div>
          <div className='content'>
            <Routes>
              <Route path="/login" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<ProductsList />} />
            </Routes>
          </div>
          <footer className='footer'>&copy; upGrad 2023</footer>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
