import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Edit, Plus, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const AdminUsers = () => {
  const [open, setOpen] = useState(false)
  const repairs = [
    {
      jobID: "JOB001",
      status: "Completed",
      serviceType: "Oil Change",
      totalCost: "$50.00",
      customerName: "John Doe",
      contactNumber: "123-456-7890",
    },
    {
      jobID: "JOB002",
      status: "In Progress",
      serviceType: "Brake Replacement",
      totalCost: "$300.00",
      customerName: "Jane Smith",
      contactNumber: "987-654-3210",
    },
    {
      jobID: "JOB003",
      status: "Pending",
      serviceType: "Tire Rotation",
      totalCost: "$40.00",
      customerName: "Emily Johnson",
      contactNumber: "555-555-5555",
    },
    {
      jobID: "JOB004",
      status: "Completed",
      serviceType: "Battery Replacement",
      totalCost: "$120.00",
      customerName: "Michael Brown",
      contactNumber: "444-444-4444",
    },
    {
      jobID: "JOB005",
      status: "In Progress",
      serviceType: "Transmission Repair",
      totalCost: "$1,500.00",
      customerName: "Sarah Davis",
      contactNumber: "333-333-3333",
    },
    {
      jobID: "JOB006",
      status: "Pending",
      serviceType: "Alignment",
      totalCost: "$80.00",
      customerName: "David Wilson",
      contactNumber: "222-222-2222",
    },
    {
      jobID: "JOB007",
      status: "Completed",
      serviceType: "AC Repair",
      totalCost: "$200.00",
      customerName: "Laura Martinez",
      contactNumber: "111-111-1111",
    },
  ]
  return (
    <div className='m-1 p-4'>
      {/* <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Repair Jobs</CardTitle>
          <Button onClick={() => setOpen(!open)}>
            <Plus className='h-4 w-4 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-full">Job ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {repairs.map((repair) => (
                <TableRow key={repair.jobID}>
                  <TableCell className="font-medium">{repair.jobID}</TableCell>
                  <TableCell>{repair.status}</TableCell>
                  <TableCell>{repair.serviceType}</TableCell>
                  <TableCell>{repair.totalCost}</TableCell>
                  <TableCell>{repair.customerName}</TableCell>
                  <TableCell>{repair.contactNumber}</TableCell>
                  <TableCell className='flex justify-center items-center gap-3'>
                    <Edit className='h-5 w-5 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white rounded-md' />
                    <TrashIcodn className='h-5 w-5 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-md' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card> */}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Repair Job</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="serviceType" className="text-right">
                Service Type
              </Label>
              <Input id="serviceType" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Input id="status" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="totalCost" className="text-right">
                Total Cost
              </Label>
              <Input id="totalCost" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="customerName" className="text-right">
                Customer Name
              </Label>
              <Input id="customerName" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="contactNumber" className="text-right">
                Contact Number
              </Label>
              <Input id="contactNumber" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default AdminUsers;
