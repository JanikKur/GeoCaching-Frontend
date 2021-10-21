import React from 'react'
import { Marker, Popup } from 'react-leaflet';

/**
 * 
 * @param {String} name
 * @param {String} difficulty
 * @param {String} description
 * @param {String} imagePath
 * @param {Number[]} Position
 * @returns HTML element
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
