import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import Layout from './components/Layout';
import { getCategories} from './requests/categories'
import { useState , useEffect } from 'react'
import { Context } from './context'


function App() {

  const [ categories, setCategories ] = useState([])

    useEffect(() => {getCategories(setCategories)}, [])

    

  return (
    <Context.Provider value={{ categories }}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/categories' element={<CategoriesPage/>}/>
        </Route>
      </Routes>
    </Context.Provider>
  
  );
}

export default App;
