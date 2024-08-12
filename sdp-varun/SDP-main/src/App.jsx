
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import Service from './pages/Shared/Service'
import Price from './pages/Shared/Price'
import AdminUsers from './pages/User/UserDashboard'
import UserAppointments from './pages/User/UserAppointments'
import Adminappointments from './pages/Admin/Adminappointments'
import Booking from './pages/Shared/Booking'
import Communication from './pages/User/Communication'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/price/:id' element={<Price />} />
                        <Route path='/booking' element={<Booking />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/userdashboard' element={<UserDashboard />} />
                        <Route path='/userappointments' element={<UserAppointments />} />
                        <Route path='/communication' element={<Communication />} />
                    </Route>
                    
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/users/adminappointments' element={<Adminappointments />} />

                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App