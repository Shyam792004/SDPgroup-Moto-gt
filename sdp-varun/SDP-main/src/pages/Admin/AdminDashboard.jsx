import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const AdminDashboard = () => {
    return (
        <div className="flex flex-wrap p-4 gap-4">
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        Total Cars Serviced
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">1,200</div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        Active Repairs
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">350</div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        Total Parts Ordered
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">4,800</div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        Total Revenue
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">$450,000</div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        New Appointments
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">75</div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        Customer Feedbacks
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">320</div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        New Customers
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">150</div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-6'>
                <CardHeader className="pb-2 border-b border-gray-200">
                    <CardTitle className="text-lg font-semibold text-gray-700">
                        Customer Contacts
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <div className="text-3xl font-extrabold text-gray-900">280</div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminDashboard
