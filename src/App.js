import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Marketing from './Marketing';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Call_to_action from './Call_to_action';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
function App() {
return (
    <div>
        <Navbar></Navbar>
        <Hero/>
        <Marketing/>
        <Testimonials/>
        <Pricing/>
        <Call_to_action/>
        <Footer/>
    </div>
);
}

export default App;
