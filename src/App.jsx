import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryPage from "./components/entryPage/entryPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EntryPage/>}></Route>
      <Route  path="/index" element={<Navbar/>}>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
