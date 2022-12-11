import "./App.css";
import {Header} from "./components/header/Header.js"
import { Slideshow } from './components/main/Slideshow';
import { Inicio } from './components/main/Inicio';
import { ItemListContainer } from './components/main/ItemListContainer';
import { General } from './components/main/General';
import "./components/main/main.css"
import { CiLight } from 'react-icons/ci';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import { ItemDetailContainer } from "./components/main/ItemDetailContainer";

function App() {

  let [isDark, changeMode] = useState(false)

  let reverseMode = () => {
      document.querySelector(".visualMode").style.color = isDark ? "black" : "white"
      changeMode(!isDark)
  }

  /*linking to animate.css*/
  
  useEffect(() => {
  let link = document.createElement("link")
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css")
    document.querySelector("head").appendChild(link)},[])
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <main  className={isDark ? "dark" : "light"}>
        <Slideshow></Slideshow>
        <div className="changeMode">
        <CiLight title="Cambiar a modo claro/oscuro" onClick={() => {reverseMode()}} id={isDark ? "dark" : "light"} className="visualMode"></CiLight>
        <p className="change-color">Cambiar a modo claro/oscuro</p>
        </div>
        <Routes>
        <Route path="/" element={<Inicio></Inicio>} />
        <Route path="/general" element={<General></General>} />
        <Route path="/catalogue/:especie" element={<ItemListContainer></ItemListContainer>} />
        <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}/>
        </Routes>
        </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
