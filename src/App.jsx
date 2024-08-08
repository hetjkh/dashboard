import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Add from './pages/Add';
import Attributes from './pages/Attributes';
import Categories from './pages/Categories';
import Coming from './pages/Coming';
import Cupons from './pages/Cupons';
import Currencies from './pages/Currencies';
import Customer from './pages/Customer';
import Dashboard from './pages/Dashboard';
import Languages from './pages/Languages';
import Nopage from './pages/Nopage';
import Order from './pages/Order';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Staff from './pages/Staff';
import StoreCustom from './pages/StoreCustom';
import StoreSet from './pages/StoreSet';


const App = () => {
  return (
    <div>
  <Router>
    <Sidebar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/our-staff" element={<Staff />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/attributes" element={<Attributes />} />
        <Route path="/coupons" element={<Cupons />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/coming-soon" element={<Coming />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/store-customization" element={<StoreCustom />} />
        <Route path="/store-setttings" element={<StoreSet />} />
        <Route path="/add" element={<Add />} />
        

        

        
        

      </Routes>
    </Sidebar>
  </Router>
  </div>
  )
}

export default App
