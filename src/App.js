import React from "react";
import { Route , Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import LastPage from "./pages/LastPage";
import NavBar from "./components/layout/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element = {<HomePage/>} />          
        <Route path="/second" element={<SecondPage/>}/>          
        <Route path="/last" element= {<LastPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
