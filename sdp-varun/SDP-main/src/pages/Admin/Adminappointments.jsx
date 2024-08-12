import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const upcomingAppointments = [
  {
    date: "2024-08-01",
    time: "10:00 AM",
    serviceType: "Oil Change",
    mechanic: "John Doe",
  },
  {
    date: "2024-08-15",
    time: "02:00 PM",
    serviceType: "Brake Inspection",
    mechanic: "Jane Smith",
  },
  {
    date: "2024-09-13",
    time: "06:00 PM",
    serviceType: "Car Wash",
    mechanic: "Ash",
  },
  {
    date: "2024-08-15",
    time: "02:00 PM",
    serviceType: "Brake Inspection",
    mechanic: "Jane Smith",
  },
  {
    date: "2024-12-15",
    time: "12:00 PM",
    serviceType: "Suspension",
    mechanic: "Bill",
  },
];

const Adminappointments = () => {
  return (
    <Card className="shadow-sm shadow-primary">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Service Type</TableHead>
              <TableHead>Mechanic</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingAppointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.serviceType}</TableCell>
                <TableCell>{appointment.mechanic}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Adminappointments;
