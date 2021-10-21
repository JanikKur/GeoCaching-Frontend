import {useEffect, useState} from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { iconPerson } from '../helpers/positionIcon';

export default function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 10);
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={iconPerson}>
        <Popup>
          Your Position.
        </Popup>
      </Marker>
    );
  }