import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const MyMap = () => {
  const position = [0.7758591999455596, 127.37429299307693]; // Koordinat untuk posisi awal (misal: London)

  return (
    <div style={{ height: "150px" }}>
      <MapContainer
        className="rounded-[5px] w-full mb-5 h-36"
        center={position}
        zoom={17}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl: require("leaflet/dist/images/marker-icon.png"),
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>
            <span>SEKRETARIAT HMTI</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
