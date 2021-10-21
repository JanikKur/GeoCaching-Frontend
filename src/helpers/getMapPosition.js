import { useMap } from 'react-leaflet';
/**
 * Updates the View of a Leaflet Map
 * @param {Boolean} showForm
 * @returns null
 */
export default function GetMapPosition({setPosition, showForm}) {  
    let map = useMap();
    var lat = 0;
    var lng = 0;
    if(showForm){
        map.on('click', function(e){
            let coord = e.latlng;
            lat = coord.lat;
            lng = coord.lng;
            setPosition([lat, lng]); //Wie kann ich die lat lng nach außen returnen ohne was schlechtes zu machen?
        });
    }
    return null;
}