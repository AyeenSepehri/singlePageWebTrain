import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import LastPage from "./pages/LastPage";
function App() {
  return (
    <div className="App">
        <Route path="/">
          <HomePage/>
        </Route>
        <Route path="/second">
          <SecondPage/>
        </Route>
        <Route path="/last">
          <LastPage/>
        </Route>
      
    </div>
  );
}

export default App;
