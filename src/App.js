import './App.css';
// import Bar from './Bar/Bar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Content/Home'
import About from './Content/About'
import Error from './Content/Error'
import LinkBar from './Bar/LinkBar';
import Products from './Content/Products';
import Footer from './Content/Footer/Footer';
import Product from './Content/Product/Product';

function App() {
  return (
    <div>
      {/* <Bar /> */}{/* Can be used outside of Router */}
      <BrowserRouter>
        <LinkBar />  {/* Use inside of Router */}
        <Routes>
          <Route element={<Home />    } path='/' />
          <Route element={<Home />    } path='/home' />
          <Route element={<About />   } path='/about' />
          <Route element={<Products />} path='/products' >
            <Route index element={<Product />} path='/products/:id' />
          </Route>
          <Route element={<Error />   } path='*' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
