import {AiOutlineMenu} from 'react-icons/ai'
import Carousel from './components/Carousel';
import Destionations from './components/Destionations';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Destionations/>
     <Search/>
     <Selects/>
     <Carousel/>
     <Footer/>
    </div>
  );
}

export default App;
