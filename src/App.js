import './App.css';
import Map from './components/Map';
import Search from './components/Search';
import {useState, useEffect} from 'react';
import axios from 'axios';
import AddLocation from './components/AddLocation';


export default function App() {
  let startPosition = [49.424367, 6.7252024]; //Center Of Germany
  const [position, setPosition] = useState(startPosition)
  const [newLocationPosition, setNewLocationPosition] = useState([])
  const [locations, setLocations] = useState([])
  const zoom = 6;
  const [showForm, setShowForm] = useState(false);

  /**
   * Updates the show Form
   */
  let updateShowForm = () => {
    setShowForm(!showForm);
  }

  /**
   *Initial lode Locations 
  */
  useEffect(() => {
    axios.get('http://localhost:8000/api/geoLocations').then((response) => {
      setLocations(response.data)
    }).catch(err => {
      alert(err.message)
    })
  },[])


  return (
    <>
    <AddLocation showForm={showForm} updateShowForm={updateShowForm} newLocationPosition={newLocationPosition} position={position}/>
    <Search setPosition={setPosition}/>
    <Map locations={locations} position={position} setPosition={setPosition} zoom={zoom} setNewLocationPosition={setNewLocationPosition} showForm={showForm} updateShowForm={updateShowForm}/>
    </>
  );
}