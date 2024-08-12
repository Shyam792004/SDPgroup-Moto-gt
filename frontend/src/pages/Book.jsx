import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';

import './Book.css';
import axios from 'axios';
import Header from '../components/Header';

const services = [
  'Oil Change',
  'Brake Repair',
  'Tire Replacement',
  'Battery Replacement',
  'Engine Diagnostics',
  'Transmission Repair',
  'Air Conditioning Service',
  'Suspension Repair',
  'Detailing',
  'Battery Testing',
  'General Maintenance',
];

const Book = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const customerId = useSelector((state) => state.auth.customerId); // Assuming customerId is in your auth state


  useEffect(() => {
    if (isAuthenticated) {
      setFormData((prevData) => ({ ...prevData, customerId }));
    }
  }, [isAuthenticated, customerId]);
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    vehicleNo: '',
    service: '',
    date: '',
    time: '',
    problemDesc: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { time, date } = formData;
    const [hour, minute ] = time.split(':');
    const hourInt = parseInt(hour, 10);

    const today = new Date();
    const selectedDate = new Date(date);

    if (hourInt < 9 || hourInt > 16) {
      alert('Please select a time between 9 AM and 4 PM.');
      minute;
      return;
    }

    if (selectedDate < today) {
      alert('Please select a current or future date.');
      return;
    }

    if (isAuthenticated) {
      // const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      // bookings.push(formData);
      // localStorage.setItem('bookings', JSON.stringify(bookings));

      console.log('Booking details:', formData);
      try {
        const response = await axios.post('http://127.0.0.1:8080/Bookings', {
          name: formData.name,
          phonenumber:formData.phonenumber,
          vehicleNo: formData.vehicleNo,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          problemDesc: formData.problemDesc,
          customer_id: formData.customer_id,
        });

        if (response.status === 200 || response.status === 201) 
        {
          console.log('Form Submitted', formData);
          alert('Booking confirmed!');
        }
        else
        {
          console.log('Unexpected response status:', response.data);
        }
      } 
      catch (error) 
      {
        console.error('Error registering service:', error);
        alert('An error occurred while registering. Please try again.');
      }
    } 
  };

  const todayDate = new Date().toISOString().split('T')[0];

  return (
    <>
    <Header></Header>
    <div className='b-body'>
    <Box className="booking-container">
      <Typography variant="h3" component="h1" gutterBottom className="booking-title">
        Book a Service
      </Typography>
      <form className="booking-form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          />
        <TextField
          label="Phone"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          />
        <TextField
          label="Vehicle Number"
          name="vehicleNo"
          value={formData.vehicleNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          />
        <TextField
          select
          label="Service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          >
          {services.map((service, index) => (
            <MenuItem key={index} value={service}>
              {service}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              min: todayDate,
            },
          }}
          required
          />
        <TextField
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
          />
        <TextField
          label="Describe Your Problem"
          name="problemDesc"
          value={formData.problemDesc}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          />
        <Button variant="contained" color="primary" type="submit" fullWidth className="submit-button">
          Book Now
        </Button>
      </form>
    </Box>
    </div>
          </>
  );
};

export default Book;
