import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryPage from "./components/entryPage/EntryPage";
import NavigationBar from "./components/navbar/NavigationBar";
import About from "./components/about/About";
import Animation from "./components/animation/Animation";
import Contact from "./components/contact/Contact";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EntryPage/>}></Route>
      <Route path="/index" element={<NavigationBar/>}></Route>
      <Route path='/about' element ={<About />}></Route>
      <Route path='/animation' element ={<Animation/>}></Route>
      <Route path='/contact' element ={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
