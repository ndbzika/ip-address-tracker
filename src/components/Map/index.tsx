import { MapContainer, TileLayer } from "react-leaflet"

import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
    />
    </MapContainer>
  )
}
