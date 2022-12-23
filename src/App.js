import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import Layout from './components/Layout';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<MainPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/categories' element={<CategoriesPage/>}/>
    </Route>
  </Routes>
  );
}

export default App;
