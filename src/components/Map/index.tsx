import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { IpGeoLocation } from "../../models/IpInfo";
import { useEffect, useState } from "react";
import marker from '../../../public/pin_marker.png'
import { Icon } from "leaflet";

import 'leaflet/dist/leaflet.css';

export const Map = ({lat = 0, lon = 0}: IpGeoLocation) => {
  const customIcon = new Icon({
    iconUrl:marker,
    iconSize: [80, 80],

  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [map, setMap] = useState<any>(null)
  useEffect(() => {
    if (map) {
      map.flyTo([lat+0.01, lon], 13)
    }
  }, [lat, lon, map])
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '60vh' }}
      ref={setMap}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker position={[lat, lon]} icon={customIcon}/>
    </MapContainer>
  )
}
