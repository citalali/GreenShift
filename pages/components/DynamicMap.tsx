import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const DynamicMap = () => {
  return (
    <MapContainer
      center={[52.5096, 13.3759]}
      zoom={33}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[52.5096, 13.3759]}>
        <Popup>a nice shop :)</Popup>
      </Marker>
    </MapContainer>
  );
};

export default DynamicMap;
