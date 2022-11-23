import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "./components/Home/Home"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Projects from './components/Projects/Projects';
import Experience from "./components/Experience/Experience"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/projects" exact element={<Projects />}/>
          <Route path="/projects/:projectID" exact element={<ProjectDetail />} />
          <Route path="/experience" exact element={<Experience />}/>
          <Route path="/contact" exact element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
