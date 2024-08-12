import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const UserAppointments = () => {
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    serviceType: '',
    mechanic: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleAddAppointment = () => {
    if (newAppointment.date && newAppointment.time && newAppointment.serviceType && newAppointment.mechanic) {
      // Handle the new appointment here (e.g., send it to the server or update the state)
      console.log("New Appointment: ", newAppointment);
      setNewAppointment({ date: '', time: '', serviceType: '', mechanic: '' });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="p-4">
      <Card className="shadow-sm shadow-primary">
        <CardHeader>
          <CardTitle>Add New Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={newAppointment.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={newAppointment.time}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <Input
                id="serviceType"
                name="serviceType"
                value={newAppointment.serviceType}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mechanic">Mechanic</Label>
              <Input
                id="mechanic"
                name="mechanic"
                value={newAppointment.mechanic}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddAppointment}>Add Appointment</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserAppointments;
