import React, { Component } from 'react';
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
// import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

// TODO -handlers for onLoad, onError, onUnMount
// PROPS => ZOOM, CENTER

// TODO check for markers
const MyMapComponent = (props) => (
  <LoadScript
    id="script-loader"
    googleMapsApiKey="AIzaSyDIhcy641K5S299bkKIJMU4B1U6XUuR_uo"
  >
    <GoogleMap
      id="example-map"
      mapContainerStyle={{
        height: "400px",
        width:  "800px"
      }}
      zoom={8}
      center={{
        lat: 34.0522,
        lng: -118.2437
      }}
    >
    {props.markers.providers.map(marker => (
        <Marker
          key={marker.key}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))
      }
    </GoogleMap>
  </LoadScript>
)

export default MyMapComponent;
