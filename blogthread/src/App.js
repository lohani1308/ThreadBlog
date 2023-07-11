import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/component/Navbar';
import Footer from '../src/component/Footer';
import AppRoute from './routes/route';

function App() {
  return (
    <Router>
        <Navbar />
        <AppRoute />
        <Footer />
    </Router>
  
  );
}

export default App;
