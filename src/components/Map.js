import React from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';

const stops = {
    stop1:{id: 1, name:"Syntagma", coordinates:[37.9755, 23.7344]},
    stop2:{id: 2, name:"Katexaki", coordinates:[37.9875, 23.7697]}
};

const icon = new Leaflet.Icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconSize: [15, 50],
    popupAnchor: [0, -41]
});

const Map = () =>{
    const route = [
        stops.stop1.coordinates,
        stops.stop2.coordinates
    ];

    return(
        <MapContainer center = {stops.stop1.coordinates} zoom = {10} style = {{ height: "500px", width: "100%"}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {Object.values(stops).map(stop => (
                <Marker key = {stop.id} position={stop.coordinates} icon={icon}>
                    <Popup>{stop.name}</Popup>
                </Marker>
            ))}

            <Polyline positions={route} color="blue"/>

        </MapContainer>
    );
};

export default Map;