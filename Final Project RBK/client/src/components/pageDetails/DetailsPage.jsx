import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin, Phone, Calendar, Star, Users, Home, DollarSign } from 'lucide-react';
import BasicFooter from './Footer'
import ErrorHouse from './ErrorHouse'
import Map_page from './Map'
import '../../App.css'


export default function DetailsPage() {

    const dummyHouse = 'https://i.pinimg.com/enabled_hi/564x/2b/63/d4/2b63d4b56e89911b462dfc2b44e3d65f.jpg';

    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(2)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/house/getAll');
                setData(res.data);

                const imgRes = await axios.get('http://localhost:8080/imgHouse/getAll');
                setImages(imgRes.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        fetchData();
    }, []);

    const getHouseImages = (house) => {
        return images.filter((img) => img.houseId === house);
    };

    if (data.length === 0 ) {
        return <ErrorHouse />
    }

    const house = data[index];
    const houseImages = getHouseImages(house.id);

    return (
        <div>
            <div className="container mx-auto px-6 py-10 mt-16 max-w-6xl bg-gray-50">
                <h1 className="text-4xl font-extrabold mb-6 text-gray-900">{house.title}</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left column: Images and buttons */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            <img src={houseImages[0]?.url || dummyHouse} alt="House view 1" className="col-span-4 w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-2xl transition duration-300" />
                            <img src={houseImages[1]?.url || dummyHouse} alt="House view 2" className="col-span-2 w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300" />
                            <img src={houseImages[2]?.url || dummyHouse} alt="House view 3" className="col-span-2 w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300" />
                        </div>

                        <div className="flex gap-4 mb-6">
                            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center text-lg font-semibold shadow-md hover:shadow-lg">
                                <Calendar className="mr-2" size={24} />
                                Reserve Now
                            </button>
                            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center text-lg font-semibold shadow-md hover:shadow-lg">
                                <Phone className="mr-2" size={24} />
                                Contact Agent
                            </button>
                        </div>
                    </div>

                    {/* Right column: Description and house details */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Description</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">{house.description}</p>
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-3xl font-bold text-blue-600">{house.price}</p>
                                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                                    <Star className="text-yellow-400 mr-1" size={20} />
                                    <span className="font-semibold text-blue-800">{house.rating || 5}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center">
                                    <Users className="text-gray-400 mr-2" size={20} />
                                    <span className="text-gray-600">{house.guests || 5} guests</span>
                                </div>
                                <div className="flex items-center">
                                    <Home className="text-gray-400 mr-2" size={20} />
                                    <span className="text-gray-600">{house.room} bedrooms</span>
                                </div>
                                <div className="flex items-center">
                                    <DollarSign className="text-gray-400 mr-2" size={20} />
                                    <span className="text-gray-600">Refundable deposit</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="text-gray-400 mr-2" size={20} />
                                    <span className="text-gray-600">{house.surface} bathrooms</span>
                                </div>
                            </div>
                            <div className="flex items-center text-gray-500 bg-gray-100 p-3 rounded-lg shadow-inner">
                                <MapPin size={24} className="mr-2 text-blue-500" />
                                <span className="text-sm">{house.region}</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Location</h2>
                    <div className="bg-gray-200 h-96 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition duration-300">
                    <Map_page house={house}  items={data} img={images} />
                    </div>
                </div>
            </div>
            <BasicFooter />
        </div>
    );
}
