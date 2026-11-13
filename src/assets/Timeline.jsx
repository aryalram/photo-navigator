import photos from "./Photos.js"; // Correct import (Photos.js not Photos.jsx)

function Timeline({ onSelectPhoto }) {
  return (
    <div
      style={{
        overflowX: "scroll",
        whiteSpace: "nowrap",
        padding: "10px",
        borderBottom: "2px solid #ccc",
      }}
    >
      {photos.map((photo) => (
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
      ))}
    </div>
  );
}

export default Timeline;
