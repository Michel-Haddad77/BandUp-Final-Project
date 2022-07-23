import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login page/LoginPage';
import HomePage from './pages/home page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route 
          path="/"
          element = {
            <LoginPage />
          }
      />
      <Route 
          path="/home"
          element = {
            <HomePage/>
          }
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
