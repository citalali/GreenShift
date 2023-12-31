import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

interface DynamicMapProps {}

const DynamicMap: React.FC<DynamicMapProps> = () => {
  // @ts-ignore
  return (
    <div>Map</div>
    /**<MapContainer
      // center={center}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Additional map layers or components go here }
    </MapContainer> **/
  );
};

export default DynamicMap;
