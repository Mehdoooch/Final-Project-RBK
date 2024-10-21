import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Pin from './Pin'

function Map({ house, img }) {

  const mapStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
  };
  const [latitude, longitude] = house.localisation.split(',').map(Number);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={7}
      scrollWheelZoom={false}
      style={mapStyles}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Pin house={house} img={img}  />
    </MapContainer>
  );
}

export default Map