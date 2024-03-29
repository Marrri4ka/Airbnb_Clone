import React from 'react';
import PropTypes from 'prop-types';

function Place(props){

  let container = {
    padding: '10px'
  }
  let topleft = {
    position: 'absolute',
    top: '8px',
    left: '16px'
  }

  return(
        <div style={container} className='col-md-2'>
      <div class="card" style={{width: '1rem;'}}>
    <img src={props.img}/>
    <div style={topleft}>
  <div class="card-body">
    <h5 class="card-title"><h3>{props.name}</h3></h5>
    <p class="card-text">
            <h4>{props.price}</h4></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
</div>

  );
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default Place;
