import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Calendar, DollarSign } from 'lucide-react';

export default function ReservationPopup({ isOpen, onClose, house }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(house.price);

    const houseId = house.id;
    const userId = 2; 

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            setTotalPrice(house.price * nights);
        } else {
            setTotalPrice(house.price);
        }
    }, [startDate, endDate, house.price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/reserv/add`, {
                startDate,
                endDate,
                houseId,
                userId,
            });
            onClose(); 
            console.log('Reservation submitted:', { startDate, endDate, totalPrice });
        } catch (err) {
            console.log('Error:', err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Reserve {house.title}</h2>
                    <button onClick={onClose} className="text-black hover:text-gray-600 p-1">
                        <X size={18} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Check-in</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                id="start-date"
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">Check-out</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                id="end-date"
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-gray-800">Total</span>
                            <span className="text-2xl font-bold text-blue-600 flex items-center">
                                <DollarSign className="h-6 w-6 mr-1" />
                                {totalPrice}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Price per night: ${house.price}</p>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Reserve Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
