import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  useEffect(() => { //useEffect(run code when the app loads.)
    console.log("App Loaded");
  }, []);

  return ( 
    //routing in react
    <BrowserRouter>  
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;