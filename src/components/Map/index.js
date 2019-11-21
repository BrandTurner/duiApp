import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

const AnyReactComponent

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))
      }
    </MarkerClusterer>
  </GoogleMap>
))

export default MyMapComponent
