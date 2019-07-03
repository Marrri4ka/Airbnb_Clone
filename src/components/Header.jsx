import React from 'react';
import {Link} from 'react-router-dom';
import airbnb from '../assets/img/air.svg';

function Header(){
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img width="30px"src={airbnb}/>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active"><Link to='/homepage'>Home</Link></a>
      <a class="nav-item nav-link"><Link to="/login">Log in</Link></a>
      <a class="nav-item nav-link"><Link to="/places">Recommendations</Link></a>

    </div>
  </div>
</nav>);
}

export default Header;
