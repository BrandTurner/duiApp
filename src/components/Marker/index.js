import React, { Fragment } from 'react';
import InfoWindow from '../InfoWindow'
import PropTypes from 'prop-types';

const Marker = (props) => {
  const markerStyles = {
    border: '1px solid white',
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: props.show ? 'red' : 'blue',
    cursor: 'pointer',
    zIndex: 10
  };

  return (
    <Fragment>
      <div style={markerStyles} />
      {props.show && <InfoWindow place={props.place} />}
    </Fragment>
  )
}

export default Marker;

