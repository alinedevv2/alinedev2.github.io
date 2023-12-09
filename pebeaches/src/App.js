import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home.js';
import Cadastro from './Cadastro.js';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='*' element={<h1>Not Found</h1>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

window.onload=function(){
  const menuIcon = document.querySelector(".menu-icon")
            const menuItems = document.querySelector(".menu-items")

            menuIcon.addEventListener('click',()=>{
            menuItems.classList.toggle('menu')
            })
}

export default App;
