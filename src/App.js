
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import HomePage from './Component/HomePage';
import AboutPage from './Component/AboutPage';
import TechStack from './Component/TechStack';
import Project from './Component/Project';
import ContactPage from './Component/ContactPage';
import Project2 from "./Component/Project2";

function App() {
  return (
    <div>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/skill' element={<TechStack />}></Route>
      <Route path='/project' element={<Project2 />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
