import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import TemplatePlaceholder from './pages/templates/TemplatePlaceholder';

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/templates/:id" element={<TemplatePlaceholder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
