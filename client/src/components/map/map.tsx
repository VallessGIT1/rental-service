import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { defaultIcon } from './leafletIcon';  // путь к файлу с иконками

type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

type MapProps = {
    cityLocation: Location;
    points: {
        id: string;
        latitude: number;
        longitude: number;
        title?: string;
    }[];
};

const CityMap: React.FC<MapProps> = ({ cityLocation, points }) => {
    return (
        <section className="cities__map" style={{ height: '100%', width: '100%' }}>
            <MapContainer
                center={[cityLocation.latitude, cityLocation.longitude]}
                zoom={cityLocation.zoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {points.map(({ id, latitude, longitude, title }) => (
                    <Marker key={id} position={[latitude, longitude]} icon={defaultIcon}>
                        {title && <Popup>{title}</Popup>}
                    </Marker>
                ))}
            </MapContainer>
        </section>
    );
};

export default CityMap;
