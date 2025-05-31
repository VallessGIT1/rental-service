import React, {useEffect, useRef} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type Location = {
  latitude: number
  longitude: number
  zoom: number
}

type MapProps = {
  cityLocation: Location
  points: {
    id: string
    latitude: number
    longitude: number
    title?: string
  }[]
}

const CityMap: React.FC<MapProps> = ({cityLocation, points}) => {

  const mapRef = useRef<MapContainer>(null)

  useEffect(() => {
    if (mapRef.current)
      mapRef.current.setView([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom)
  }, [cityLocation])

  return (
      <section className="cities__map" style={{height: '100%', width: '100%'}}>
        <MapContainer
            ref={mapRef}
            style={{height: '100%', width: '100%'}}
            scrollWheelZoom={false}
            center={[cityLocation.latitude, cityLocation.longitude]}
            zoom={cityLocation.zoom}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {points.map(({id, latitude, longitude, title}) => (
              <Marker key={id} position={[latitude, longitude]}>
                <Popup>{title}</Popup>
              </Marker>
          ))}
        </MapContainer>
      </section>
  )
}

export default CityMap
