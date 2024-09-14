import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;