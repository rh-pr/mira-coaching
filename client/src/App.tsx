import { Route, Routes } from "react-router-dom"
import Nav from "./components/nav/Nav"
import Home from "./pages/Home"

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./components/footer/Footer";
import Reviews from "./pages/Reviews";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import ModalForm from "./components/reviews/ModalForm";


function App() {
  const context = useContext(MainContext);

  return (
    <div className="mira">
      {context?.isWritingNewReview && <ModalForm />}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
