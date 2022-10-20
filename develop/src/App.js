import "./App.css";
import React, { useState } from 'react';

import Home from "./pages/home";
import Portfolio from "./pages/portfolio/index";
// import Resume from "./pages/resume";
import Contact from "./pages/contact";

import Header from "./components/header";
import Footer from "./components/footer";


function App() {

  const [currentPage, handlePageChange, setCurrentPage] = useState([0]);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
    if (currentPage === 'Contact')
      return <Contact />;
  };

  const [contactSelected] = useState(false);
  
  return (

    <div className="App">

      <Header currentPage={currentPage} handlePageChange={handlePageChange} setCurrentPage={setCurrentPage}>
        {renderPage()}
      </Header>

      <main>
        {!contactSelected ? (
          <>
            <div currentPage={currentPage}>{currentPage}</div>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
