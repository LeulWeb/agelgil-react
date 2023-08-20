import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Impact from './pages/Impact'
import Product from './pages/Product'
import Nav from './components/Nav'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <main>
        <Nav />
        {/* Navbar  */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/impact" element={<Impact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
        </Routes>

        {/* Footer */}

        <Footer />
      </main>
    </>
  );
}

export default App