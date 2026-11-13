import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import photos from "./Photos.js";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

function MapView({ onSelectPhoto }) {
  return (
    <div style={{ height: "500px", width: "100%", marginTop: "30px" }}>
      <MapContainer
        center={[-40.9006, 174.886]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {photos.map((photo) => (
          <Marker
            key={photo.id}
            position={[photo.location.lat, photo.location.lng]}
          >
            <Popup>
              <div style={{ textAlign: "center" }}>
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  style={{ width: "100px", height: "70px", objectFit: "cover" }}
                />
                <br />
                <strong>{photo.title}</strong>
                <br />
                <button
                  style={{ marginTop: "5px" }}
                  onClick={() => onSelectPhoto(photo)}
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
