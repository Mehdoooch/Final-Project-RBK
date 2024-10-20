import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function Pin({ item, images }) {
  const [image, setImages] = useState(images || []);

  const custom_popup = {
    maxWidth: '200px',
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imgStyles = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  };

  const getHouseImages = (house) => {
    return Array.isArray(image) ? image.filter((img) => img.houseId === house) : [];
  };

  const houseImage = getHouseImages(item.id);

  return (
    <Marker position={[36.800711, 10.186228]}>
      <Popup>
        <div style={custom_popup}>
          {houseImage.length > 0 && (
            <img
              style={imgStyles}
              src={houseImage[0].url}
              alt={item.title}
            />
          )}
          <div className="px-2 py-1">
            <div className="font-bold text-sm mb-1">{item.title}</div>
            <p className="text-gray-700 text-xs">{item.description}</p>
          </div>
          <div className="px-4 py-1">
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">
              ${item.price}/night
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">
              {item.bedrooms} beds
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
