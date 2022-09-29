import "./App.css";
import Home from "./pages/home";
// import Contact from "./pages/contact/index";
import Portfolio from "./pages/portfolio/index";
import Resume from "./pages/resume";
import Contact from "./pages/contact/index";
import React, { useState } from 'react';

import Header from "./components/header";
// import Footer from "./components/footer";


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div className="App">

      <Header currentPage={currentPage} handlePageChange={handlePageChange}>
        {renderPage()}
      </Header>


      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
