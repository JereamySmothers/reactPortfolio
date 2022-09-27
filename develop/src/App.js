import "./App.css";
import Home from "./components/home";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./components/contact/index";
import Portfolio from "./components/portfolio/index";
// import Resume from "./components/resume";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (

    <div className="App">

      <Header>
        <Router>
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/Portfolio' component={Portfolio} />
            {/* <Route path='/Resume' component={Resume} /> */}
            <Route path='/Contact' component={Contact} />
          </Routes>
        </Router>
      </Header>

      <main>
        <Home></Home>
      </main>

      <Footer></Footer>

    </div>
  );
}

export default App;
