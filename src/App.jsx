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
import NewsDetail from './pages/NewsDetail'
import NewsPage from './pages/NewsPage'
import ProductCard from './components/ProductCard'
const App = () => {

  const mapFrame = `<iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31268.897251533203!2d37.34540609664157!3d11.579636971800191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cffd70f1e1df%3A0xc1464dcdf79b85bd!2zbGVtbGVtaXR1IEJhaGlyZGFyIENvbW1lcmNpYWwgQ2VudGVyIOGIiOGIneGIiOGImuGJsSDhiaPhiIXhiK3hi7PhiK0g4Yuo4YyI4Ymg4YurIOGIm-GKpeGKqOGIjQ!5e0!3m2!1sen!2set!4v1692539134597!5m2!1sen!2set"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>`;

  return (
    <>
      <main className="relative flex flex-col">
        <Nav />
        {/* Navbar  */}

        <div className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/contact"
              element={<Contact mapFrame={mapFrame} />}
            ></Route>
            <Route path="/impact" element={<Impact />}></Route>
            <Route path="/product" element={<Product />}>
              <Route path='/product/:id' element={ProductCard}></Route>
            </Route>
            <Route path='/news' element={<NewsPage />}></Route>
            <Route path="/news/:id" element={<NewsDetail />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>

        {/* Footer */}

        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App