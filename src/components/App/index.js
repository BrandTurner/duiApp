import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

// Native
const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
const la_center = [34.0522, -118.2437];

class MarkerInfoWindow extends Component {
  state = {
    places: [],
  }

  componentDidMount() {
    fetch('places.json')
      .then(response => response.json())
      .then((data) => {
        data.results.forEach((result) => {
          result.show = false; // Not functional, no good
        });
        this.setState({ places: data.results });
      })
  }

  onChildClickCallback = (key) => {
    this.setState((state) => {
      const index = state.places.findIndex(e => e.id === key);
      state.places[index].show = !state.places[index].show;
      return { places: state.places };
    })
  }

  render() {

    const { places } = this.state;

    return (
      <Fragment>
        {!isEmpty(places) && (
          <GoogleMapReact
            defaultZoom={10}
            defaultCenter={la_center}
            bootstrapURLKeys={{ key: 'AIzaSyDIhcy641K5S299bkKIJMU4B1U6XUuR_uo' }}
            onChildClick={this.onChildClickCallback}
          >

            {places.map(place =>
            (<Marker

            ))}

          </GoogleMapReact>
        )}
      </Fragment>
    )
  }
}
