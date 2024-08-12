import  { useState } from 'react';
import './AdminDashboard.css';

const AdminDashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <div className={`side-nav ${isSidebarOpen ? 'open' : ''}`}>
        <button className="menu-button" onClick={toggleSidebar}>
          Menu
        </button>
        <a href="/users">Users</a>
        <a href="/bookings">Bookings</a>
        <a href="/technicians">Technicians</a>
        <button>CHANGE PASSWORD</button>
        <button>LOGOUT</button>
      </div>
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="top-nav">
          <button className="menu-button" onClick={toggleSidebar}>
            Menu
          </button>
          <h1>Admin Dashboard</h1>
        </div>
        <h2>Bookings</h2>
        <div className="summary">
          <p>Number of Bookings: 0</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Vehicle Number</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Problem Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Table data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashBoard;
