import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFodWwxNDMwIiwiYSI6ImNrNmpwazN3MDAwMmkza3BieXIxNno2MmQifQ.bUkNfThpdNRX3hybBTyDMw';

class MapClass extends Component{

  constructor() {
    super();
    this.state = {
      lng: 74.9260,
      lat: 15.5188,
      zoom: 10
    };
}

componentDidMount() {
  
  axios.get('http://10.196.6.173:5000/sosReact', {
    params:{
      "lat":this.state.lat,
      "lng":this.state.lng
    }
       }).then(response => {
               console.log(response.data);
               if (response.status === 200) {
                   alert("Lat,Long")
               }
           })
           .catch(err => {
               console.log(err);
           })

  const map = new mapboxgl.Map({
  container: this.mapContainer,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [this.state.lng, this.state.lat],
  zoom: this.state.zoom
  });

  map.on('move', () => {
    this.setState({
    lng: map.getCenter().lng.toFixed(4),
    lat: map.getCenter().lat.toFixed(4),
    zoom: map.getZoom().toFixed(2)
    });
    });
  }

  render() {
  
    return(
      <div> 
        <div id='map'></div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    )
  }
} 

export default MapClass;
