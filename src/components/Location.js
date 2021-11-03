import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import '../css/Location.css';
/**
 * Returns a Marker of a Geocache Location
 * @param {String} name
 * @param {String} difficulty
 * @param {String} description
 * @param {String} imagePath
 * @param {Number[]} position
 * @returns {Marker} Marker
 */
export default function Location({name, difficulty, description, image, position}) {
    return (
        <Marker position={position}>
            <Popup>
                <h3 className="name">{name}</h3>
                <h4 className="difficulty">{difficulty}</h4>
                <p className="description">{description}</p>
                <a href={`http://www.google.com/maps/place/${position[0]},${position[1]}`} target="_blank" rel="noreferrer">Google Maps</a>
                <img src={`http://localhost:8000/${image}`} alt={name}/>
            </Popup>
        </Marker>
    )
}
