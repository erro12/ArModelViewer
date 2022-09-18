import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUsPage/AboutUs';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <AboutUs />
      <Routes>
        <Route path='/' element={AboutUs} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
