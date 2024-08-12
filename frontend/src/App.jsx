
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
// import AdminDashboard from './pages/Admin/AdminDashBoard';
import About from './pages/About';
import Services from './pages/Services';
import Book from './pages/Book';
// import AdminLayout from './layout/AdminLayout';
import AdminDashboard2 from './pages/Admin/AdminDashboard2';
import AdminUsers from './pages/Admin/AdminUsers';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/Admin/AdminDashBoard';
import CustomizedSnackbars from './components/ui/Snackbar';
import AdminLayout from './layout/AdminLayout';
import UserProfile from './pages/UserProfile';


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isAuthenticated ? (isAdmin ? <Navigate to="/admin-dashboard" /> : <Navigate to="/" />) : <Login />}
          />
          <Route path='/logina' element={<Login/>}></Route>
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/" /> : <Register />}
          />
          {/* <Route element={ isAdmin ? <AdminLayout />:<Navigate to="/login" /> }> */}
                        <Route path='/admin/dashboard' element={<AdminDashboard2 />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    {/* </Route> */}
          <Route
            path="/admin-dashboard"
            element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services/>} /> 
          <Route path="/book" element={isAuthenticated ? <Book/> : <Navigate to="/login" />} />
         <Route path="/bar" element={<CustomizedSnackbars></CustomizedSnackbars>}/>
         <Route path='/theme' element={<AdminLayout></AdminLayout>}></Route>
         <Route path="/profile" element={<UserProfile/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

