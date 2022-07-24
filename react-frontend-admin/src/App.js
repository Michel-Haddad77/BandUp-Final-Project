import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login page/LoginPage';
import HomePage from './pages/home page/HomePage';
import GenresPage from './pages/genres page/GenresPage';
 import InstrumentsPage from './pages/instruments page/InstrumentsPage';

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

      <Route 
          path="/genres"
          element = {
            <GenresPage/>
          }
      />

      <Route 
          path="/instruments"
          element = {
            <InstrumentsPage/>
          }
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
