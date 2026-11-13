# Photo Navigator

Photo Navigator is a React web app for exploring a photo collection by timeline and location. Search and filter photos, browse their locations on an interactive map, and open a photo to see its details.

## Features

- Browse photos in a horizontally scrolling timeline.
- Search photos by title.
- Filter by location or season.
- Explore photo locations on an interactive map.
- Select a photo to view its image, title, description, and date.

## Built with

- React 19
- Vite
- Leaflet and React Leaflet
- OpenStreetMap map tiles

## Run locally

Requires Node.js and npm.

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  App.jsx          Main app and search/filter controls
  Timeline.jsx     Photo timeline
  MapView.jsx      Interactive map and photo markers
  PhotoDetail.jsx  Selected photo details
  Photos.js        Photo metadata
public/
  iCloud_Photos_Photos/  Photo image assets
```

Photo entries and their metadata are maintained in `src/Photos.js`; image files are stored in `public/iCloud_Photos_Photos/`.

## Photo privacy

Files in `public/` are served as public assets. Only add photos and location details that you have permission to share, especially when deploying this app publicly. The map uses OpenStreetMap tiles and displays the locations configured in the photo metadata.
