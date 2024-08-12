import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import axios from 'axios';
import './Login.css';
import { Alert, Snackbar } from '@mui/material';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [admins,setAdmins]= useState([]);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/Customers');
        setUsers(response.data); // Store users in state
        console.log('Users from API:', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/Admin/getAll');
        setAdmins(response.data); // Store users in state
        console.log('Admin from API:', response.data);
      } catch (error) {
        console.error('Error fetching admin:', error);
      }
    };

    fetchAdmins();
  }, []);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
 /*const handleLogin = async (e) => {
  e.preventDefault();
  const newErrors = {
    email: !validateEmail(formData.email),
    password: !formData.password,
  };
  setErrors(newErrors);

  if (Object.values(newErrors).every(error => !error)) {
    try {
      console.log('Users from state:', users);
      console.log('Admins from state:', admins);

      const user =  users.find(user => user.email === formData.email && user.password === formData.password) : null;
      const admin =  admins.find(admin => admin.email === formData.email && admin.password === formData.password) : null;

      if (user || admin) {
        console.log('User found:', user);
        const isAdmin = admin ? true : false; // Check if admin object exists
        console.log('Is admin:', isAdmin);
        dispatch(login({ email: formData.email, isAdmin }));
        navigate(isAdmin ? '/admin-dashboard' : '/');
      } else {
        setErrors({ email: true, password: true });
        console.log('Username or password is incorrect');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in. Please try again.');
    }
  }
};*/

   const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = {
      email: !validateEmail(formData.email),
      password: !formData.password,
    };
    setErrors(newErrors);
  
    if (Object.values(newErrors).every(error => !error)) {
      try {
        console.log('Users from state:', users);
        console.log('Admins from state:', admins);
        const user = users.find(user => user.email === formData.email && user.password === formData.password);
        const admin = admins.find(admin => admin.email === formData.email && admin.password === formData.password);
  
        if (user || admin) {
          console.log('User found:', user);
          const isAdmin = admin ? true : false; // Check if admin object exists
          console.log('Is admin:', isAdmin);
          dispatch(login({ email: formData.email, isAdmin }));
          navigate(isAdmin ? '/admin-dashboard' : '/');
        } else {
          setErrors({ email: true, password: true });
          console.log('Username or password is incorrect');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in. Please try again.');
      }
    }
  };
  
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const newErrors = {
  //     email: !validateEmail(formData.email),
  //     password: !formData.password,
  //   };
  //   setErrors(newErrors);

  //   if (Object.values(newErrors).every(error => !error)) {
  //     try {
  //       console.log('Users from state:', users); 
  //       const user = users.find(user => user.email === formData.email && user.password === formData.password);
  //       const admin = admins.find(admin => admin.email===formData.email && admin.password === formData.password);
  //       if (user ||admin) {
  //         console.log('User found:', user);
  //         const isAdmin = formData.email === 'admin@gmail.com' && formData.password === 'admin123';
  //         console.log('Is admin:', isAdmin); 
  //         dispatch(login({ email: formData.email, isAdmin }));
  //         navigate(isAdmin ? '/admin-dashboard' : '/dashboard');
  //       } else {
  //         setErrors({ email: true, password: true });
  //         console.log('Username or password is incorrect');
  //       }
  //     } catch (error) {
  //       console.error('Error logging in:', error);
  //       alert('An error occurred while logging in. Please try again.');
  //     }
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className='l-body'>
      <Box className="login-container">
        <Box
          component="form"
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={handleLogin}
        >
          <Typography variant="h4" component="h1" gutterBottom className="h">
            Login
          </Typography>
          <FormControl variant="filled" error={errors.email}>
            <InputLabel htmlFor="component-filled-email">Email</InputLabel>
            <FilledInput
              id="component-filled-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <FormHelperText>Valid email is required</FormHelperText>}
          </FormControl>
          <FormControl variant="filled" error={errors.password}>
            <InputLabel htmlFor="component-filled-password">Password</InputLabel>
            <FilledInput
              id="component-filled-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <FormHelperText>Password is required</FormHelperText>}
          </FormControl>
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Login
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              This is a success Alert inside a Snackbar!
            </Alert>
          </Snackbar>
          </Button>
          <br />
          <Typography variant="body2" className="signup-text">
            Dont have an account? <Link href="/register">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
