import { useMap, useMapEvents } from 'react-leaflet';
/**
 * Updates the View of a Leaflet Map by clicking on it
 * @param {Boolean} showForm
 * @returns null
 */
export default function GetMapPosition({ setPosition, showForm }) {
    let lat = 0;
    let lng = 0;
    if(showForm){
        const map = useMapEvents({
            click: e => {
                let coord = e.latlng;
                lat = coord.lat;
                lng = coord.lng;
                setPosition([lat, lng]);
            }
        }); 
    }
    return null
}