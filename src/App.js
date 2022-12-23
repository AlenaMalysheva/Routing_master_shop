import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/categories' element={<CategoriesPage/>}/>
    </Routes>
  );
}

export default App;
