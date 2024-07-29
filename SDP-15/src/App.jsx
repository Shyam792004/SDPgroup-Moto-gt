import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Shared/Home';
import Services from './pages/Shared/Services';
import Login from './pages/Shared/Login';
import Register from './pages/Shared/Register';
import UserLayout from './layout/UserLayout';
import UserDashboard from './pages/User/UserDashboard';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import NotFound from './pages/Shared/NotFound';
import HomeLayout from './layout/HomeLayout';
import AdminUsers from './pages/Admin/AdminUsers';
import Target from './pages/Shared/Target';
import Price from './pages/Shared/Price';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path="/target" element={<Target />} />
          <Route path="/price/:id" element={<Price />} /> {/* Add your price route */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route element={<UserLayout />}>
          <Route path='/dashboard' element={<UserDashboard />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/users' element={<AdminUsers />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
