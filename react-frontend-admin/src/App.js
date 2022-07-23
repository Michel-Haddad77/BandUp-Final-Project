import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login page/LoginPage';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
