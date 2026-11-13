function PhotoDetail({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "300px",
          width: "90%",
        }}
      >
        <img
          src={photo.imageUrl}
          alt={photo.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h2>{photo.title}</h2>
        <p>{photo.description}</p>
        <p>
          <strong>Date:</strong> {photo.date}
        </p>
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2196F3",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PhotoDetail;
