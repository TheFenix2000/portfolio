import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "./components/Home/Home"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Projects from './components/Projects/Projects';
import Experience from "./components/Experience/Experience"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/projects" exact element={<Projects />}/>
          <Route path="/experience" exact element={<Experience />}/>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/project/:projectID" exact element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
