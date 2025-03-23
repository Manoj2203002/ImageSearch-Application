import React, { useState } from 'react';
import Home from './Image/Home';
import Preview from './Image/Preview';
import Header from './Image/Header';
import Footer from './Image/Footer';
import About from './Image/About';
import Contact from './Image/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div>
      <BrowserRouter>
        <Header setSearch={setSearch} setPage={setPage} />
        <Routes>
          <Route path='/' element={<Home search={search} page={page} setPage={setPage} />} />
          <Route path='/Preview/:id' element={<Preview />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
