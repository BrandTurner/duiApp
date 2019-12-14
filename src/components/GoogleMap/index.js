import React, { Component } from 'react';
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GoogleMap, LoadScript, Marker, InfoWindow, InfoBox } from '@react-google-maps/api'
// import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

// TODO -handlers for onLoad, onError, onUnMount
// PROPS => ZOOM, CENTER

// TODO check for markers

const MyMapComponent = (props) => (
  <LoadScript
    id="script-loader"
    googleMapsApiKey={props.apiKey}
  >
    <GoogleMap
      id="example-map"
      mapContainerStyle={props.mapContainerStyle}
      zoom={props.zoom}
      center={props.center}
    >

    {props.markers.providers.map(marker => (
        <Marker
          key={marker.key}
          position={marker.newLocation}
        />
      ))
      }
    </GoogleMap>
  </LoadScript>
)

export default MyMapComponent;
