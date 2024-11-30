import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Pastikan untuk mengimpor CSS Leaflet

const MyMap = () => {
  const position = [0.7758591999455596, 127.37429299307693]; // Koordinat untuk posisi awal (misal: lokasi Sekretariat HMTI)

  // Menggunakan import untuk ikon
  const iconUrl = require("leaflet/dist/images/mark-hmti.png");

  return (
    <div className="relative w-full z-0 mb-5 h-36">
      <MapContainer
        center={position}
        zoom={13}
        className="rounded-lg w-full h-full" // Tailwind CSS untuk styling
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl: iconUrl,
              iconSize: [40, 40],
              iconAnchor: [20, 40], // Menyesuaikan posisi anchor ikon
              popupAnchor: [0, -40], // Menyesuaikan posisi popup
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
