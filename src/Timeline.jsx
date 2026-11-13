import { useRef } from "react";
import photos from "./Photos.js";

function Timeline({ onSelectPhoto, searchTerm, filter }) {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch = photo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesFilter = true;
    const title = photo.title.toLowerCase();

    if (filter === "Hamilton") matchesFilter = title.includes("hamilton");
    else if (filter === "Queenstown")
      matchesFilter = title.includes("queenstown");
    else if (filter === "Christchurch")
      matchesFilter = title.includes("christchurch");
    else if (filter === "Kathmandu")
      matchesFilter = title.includes("kathmandu");
    else if (filter === "Paris") matchesFilter = title.includes("paris");
    else if (filter === "Singapore")
      matchesFilter = title.includes("singapore");
    else if (filter === "Auckland") matchesFilter = title.includes("auckland");
    else if (filter === "Summer") {
      const month = new Date(photo.date).getMonth();
      matchesFilter = [11, 0, 1].includes(month); // Dec, Jan, Feb
    } else if (filter === "Winter") {
      const month = new Date(photo.date).getMonth();
      matchesFilter = [5, 6, 7].includes(month); // Jun, Jul, Aug
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => scroll(-200)}
          style={{ ...buttonStyle, marginRight: "10px" }}
        >
          ⬅️
        </button>
        <div
          ref={scrollRef}
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            padding: "10px",
            borderBottom: "2px solid #ccc",
            flex: 1,
            scrollBehavior: "smooth",
          }}
        >
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => onSelectPhoto(photo)}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  style={{
                    width: "150px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div style={{ fontSize: "12px", marginTop: "5px" }}>
                  {new Date(photo.date).getFullYear()}
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "20px", fontSize: "16px", color: "#777" }}>
              ❗ No photos found.
            </div>
          )}
        </div>
        <button
          onClick={() => scroll(200)}
          style={{ ...buttonStyle, marginLeft: "10px" }}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  background: "#2196F3",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  fontSize: "18px",
  borderRadius: "50%",
  height: "40px",
  width: "40px",
  flexShrink: 0,
};

export default Timeline;
