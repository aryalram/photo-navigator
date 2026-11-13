import { useState } from "react";
import Timeline from "./Timeline.jsx";
import MapView from "./MapView.jsx";
import PhotoDetail from "./PhotoDetail.jsx";
import "./App.css";

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <div className="App">
      <h1>Photo Album Navigation</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search photos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "40%" }}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "8px", width: "20%" }}
        >
          <option value="All">All Photos</option>
          <option value="Hamilton">Photos in Hamilton</option>
          <option value="Queenstown">Photos in Queenstown</option>
          <option value="Christchurch">Photos in Christchurch</option>
          <option value="Kathmandu">Photos in Kathmandu</option>
          <option value="Paris">Photos in Paris</option>
          <option value="Singapore">Photos in Singapore</option>
          <option value="Auckland">Photos in Auckland</option>
          <option value="Summer">Photos from Summer (Dec-Jan-Feb)</option>
          <option value="Winter">Photos from Winter (Jun-Jul-Aug)</option>
        </select>
      </div>

      <Timeline
        onSelectPhoto={setSelectedPhoto}
        searchTerm={searchTerm}
        filter={filter}
      />
      <MapView onSelectPhoto={setSelectedPhoto} filter={filter} />
      <PhotoDetail
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}

export default App;
