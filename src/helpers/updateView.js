import { useMap } from 'react-leaflet';
import {L} from 'leaflet';
/**
 * Updates the View of a Leaflet Map
 * @param {Number[]} location
 * @param {Number} zoom
 * @returns null
 */
export default function UpdateView({ center }) {
    const map = useMap();
    map.flyTo(center, map.getZoom());
    return null;
}