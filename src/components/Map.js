import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Location from './Location';
import UpdateView from '../helpers/updateView';
import GetMapPosition from '../helpers/getMapPosition';
import LocationMarker from './LocationMarker';
/**
 * Creates a Leaflet Map
 * @param {Object[]} locations
 * @param {Number[]} position 
 * @param {Number} zoom
 * @returns 
 */
export default function Map({locations, position, zoom, showForm, setPosition}) {
    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} zoomDelta={0.25} zoomSnap={0} minZoom={2.5}>
            <UpdateView center={position} zoom={zoom*1}/>
            <GetMapPosition setPosition={setPosition} showForm={showForm}/>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
            {locations.map((location, index) => <Location key={index} name={location.name} difficulty={location.difficulty} description={location.description} image={location.image} position={location.position.split(" ")}/>)}
        </MapContainer>
    )
}
