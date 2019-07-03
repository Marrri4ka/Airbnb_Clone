import React from 'react';
import Place from './Place';
import Header from './Header';
import home from '../assets/img/house.jpeg'


function PlaceList() {

  let divStyle = {
    position: "relative",
    zIndex: "1"
  }

  let imageStyle = {
    position: "absolute",
    zIndex: "2"
  }

  let placeStyle = {
    position: "relative",
    top: "200px",
    zIndex: "3"
  }

  return(
    <div>
      <div>
      <Header/>
      </div>

      <div style={divStyle}>
        <img  style={imageStyle} height="600%" width="100%" src = {home}/>
        <div  style={placeStyle}>
          <div className='row'>
            <div className='col-md-1'/>
            <Place name='London' price='100/per night' img = 'https://picsum.photos/200/300'/>
            <Place name='London' price='100/per night' img = 'https://picsum.photos/200/300'/>
            <Place name='London' price='100/per night' img = 'https://picsum.photos/200/300'/>
            <Place name='London' price='100/per night' img = 'https://picsum.photos/200/300'/>
            <Place name='London' price='100/per night' img = 'https://picsum.photos/200/300'/>
            <div className='col-md-1'/>
          </div>
          </div>
        </div>
      </div>
  );

}


export default PlaceList;
