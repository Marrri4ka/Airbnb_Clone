import React from 'react';
import Header from './Header';
import home from '../assets/img/house.jpeg'


function LogIn(){

  let styling = {
     minHeight: '380px',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
    position: 'relative'
  }




  let container = {
    position: 'absolute',
    right: '0',
    margin: '20px',
    maxWidth: '300px',
    padding: '16px',
    backgroundColor: 'white',
    transform: 'translateY(-1000%)',
    padding: '10px'
  }
  return(
    <div>
      <Header/>
          <div>
            <div style={styling}><img height="100%" width="100%" src = {home}/></div>
            <form style={container} action="/action_page.php" class="container">
               <h1>Login</h1>

               <label for="email"><b>Email</b></label>
               <input type="text" placeholder="Enter Email" name="email" required/>

               <label for="psw"><b>Password</b></label>
               <input type="password" placeholder="Enter Password" name="psw" required/>

               <button type="submit" class="btn">Login</button>
       </form>

          </div>
    </div>
  );
}


export default LogIn;
