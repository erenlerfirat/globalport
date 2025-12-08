import Home from './components/pages/Home/Home.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/pages/Blog/Blog.js';
import About from './components/pages/About/About.js';
import Article from './components/pages/Blog/Article.js';
import Article2 from './components/pages/Blog/Article2.js';
import DryDocking from './components/pages/Services/DryDocking.js'
import TechnicalSupply from './components/pages/Services/TechnicalSupply.js'
import RepairRetro from './components/pages/Services/RepairRetro.js'
import MarineAutomation from './components/pages/Services/MarineAutomation.js'

function App() {

  return (
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/Services/DryDocking" element={<DryDocking />} />
        <Route path="/Services/TechnicalSupply" element={<TechnicalSupply />} />
        <Route path="/Services/RepairRetro" element={<RepairRetro />} />
        <Route path="/Services/MarineAutomation" element={<MarineAutomation />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog/1" element={<Article />} />
        <Route path="/Blog/2" element={<Article2 />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
  );
}

export default App;
