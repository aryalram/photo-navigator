import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import photos from "./Photos.js";
import L from "leaflet";
import { useEffect } from "react";

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

function MapView({ selectedPhoto, onSelectPhoto, filter }) {
  const filteredPhotos = photos.filter((photo) => {
    let matchesFilter = true;
    const title = photo.title.toLowerCase();

    if (filter === "Hamilton") matchesFilter = title.includes("hamilton");
    else if (filter === "Christchurch")
      matchesFilter = title.includes("christchurch");
    else if (filter === "Kathmandu")
      matchesFilter = title.includes("kathmandu");
    else if (filter === "Auckland") matchesFilter = title.includes("auckland");
    else if (filter === "Paris") matchesFilter = title.includes("paris");
    else if (filter === "Singapore")
      matchesFilter = title.includes("singapore");
    else if (filter === "Summer") {
      const month = new Date(photo.date).getMonth();
      matchesFilter = month === 11 || month === 0 || month === 1;
    } else if (filter === "Winter") {
      const month = new Date(photo.date).getMonth();
      matchesFilter = month === 5 || month === 6 || month === 7;
    }

    return matchesFilter;
  });

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
        {filteredPhotos.map((photo) => (
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
        <FlyToSelected selectedPhoto={selectedPhoto} />
      </MapContainer>
    </div>
  );
}

function FlyToSelected({ selectedPhoto }) {
  const map = useMap();

  useEffect(() => {
    if (selectedPhoto) {
      map.flyTo([selectedPhoto.location.lat, selectedPhoto.location.lng], 10, {
        duration: 2,
      });
    }
  }, [selectedPhoto, map]);

  return null;
}

export default MapView;
