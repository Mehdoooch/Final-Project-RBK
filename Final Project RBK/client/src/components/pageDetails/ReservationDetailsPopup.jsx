import React from 'react';
import { X, Calendar, DollarSign } from 'lucide-react';

export default function ReservationDetailsPopup({ isOpen, onClose, reservation }) {

  console.log('Popup isOpen:', isOpen);
  console.log('Reservation data:', reservation);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full transform translate-y-0"> 
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Reservation Confirmed</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <img 
              src={'https://i.pinimg.com/enabled_hi/564x/2b/63/d4/2b63d4b56e89911b462dfc2b44e3d65f.jpg'} 
              alt={'reservation.houseName'} 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">{reservation.houseName || 'anything for now'}</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-700">
                {reservation.nights || 1} {reservation.nights === 1 ? 'night' : 'nights' || 'yeah'}
              </span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-700">
                Total: ${reservation.totalPrice || "sure"}
              </span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Check-in: {reservation.checkIn || 'again sure'}
            </p>
            <p className="text-sm text-gray-500">
              Check-out: {reservation.checkOut || 'again sure'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
