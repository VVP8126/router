import './App.css';
// import Bar from './Bar/Bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Content/Home';
import About from './Content/About';
import Error from './Content/Error';
import Products from './Content/Products';
import Footer from './Content/Footer/Footer';
import Product from './Content/Product/Product';
import SharedLayout from './Content/Layout/SharedLayout';
import SharedProductLayout from './Content/Product/SharedProductLayout';
import {useState} from 'react';
import Login from './Content/Login/Login';
import Dashboard from './Content/Dashboard/Dashboard';
import ProtectedRoute  from './Content/Dashboard/ProtectedDashboard';

function App() {
  const [user,setUser] = useState(null);
  return (
    <div>
      {/* <Bar /> */}{/* Can be used outside of Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SharedLayout /> }>
          { /* Element <SharedLayout /> will be displayed at every page. 
               Attribute index defines child root for his parent */ }
            <Route element={<Home/>} index/>
            <Route element={<About/>} path='about'/>
            <Route element={<SharedProductLayout/>} path='products'>
              <Route element={<Products/>} index/>
              <Route element={<Product/>} path=':id'/>
            </Route>
            <Route element={<Login setUser={setUser} /> } path='login' />
            <Route element={<ProtectedRoute user={user}><Dashboard user={user} /></ProtectedRoute> } path='dashboard' />
            <Route element={<Error /> } path='*' />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
