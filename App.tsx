import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { UserProvider } from './context/UserProvider';
import { Cart, Navbar } from './components';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { About, Home, Store } from './pages';

import PageWithComponents from './components/dashboard/PageWithComponents';

import ProtectedRoute from './pages/ProtectedRoute'
import { auth } from './firebase';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [autho, setAutho] = useState(false);

  return (
    <UserProvider>
      <ShoppingCartProvider>
        <Navbar />
        <main className="main container mx-auto px-1 pt-3 bg-transparent">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setAutho={setAutho} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/PageWithComponents" element={<PageWithComponents />} />
           

          </Routes>
        </main>
      </ShoppingCartProvider>
    </UserProvider>
  );
}

export default App;
