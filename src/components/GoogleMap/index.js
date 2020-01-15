import React, { Component } from 'react';
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GoogleMap, LoadScript, Marker, InfoWindow, InfoBox } from '@react-google-maps/api'
// import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

// TODO -handlers for onLoad, onError, onUnMount
// PROPS => ZOOM, CENTER

// TODO check for markers

class MyMapComponent extends Component {
  state = {
    markers: []
  }

  componentDidMount() {
    const props  = this.props;

    this.setState({
      markers: props.markers.providers
    });
  }

  handleMarkerClick = (target_marker, index) => {
    console.log('marker clicked', target_marker);
    console.log('INDEX', index)
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === target_marker) {
          return {
            ...marker,
            showInfo: true,
          }
        }
        return marker;
      })
    })
  }

  render() {
    const props  = this.props

    return (
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
              onClick={this.handleMarkerClick}
            >
            {marker.showInfo &&
              <InfoWindow>
                <div style={{
                  background: 'white',
                  border: '1px solid #ccc',
                  padding: 15
                }}>
                  <h1>InfoWindow</h1>
                </div>
              </InfoWindow>}
            </Marker>
            ))
          }

        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MyMapComponent;
