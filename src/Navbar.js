import React from 'react';
import './Navbar.css'
import {handleSignUp, toggleSignIn, login, signUp, signout} from './Auth.js'



function Auth(props) {
  return(
    <fieldset id={props.fieldsetId}>
      <input type="text" placeholder="email" id={props.emailId} />
      <input type="password" placeholder="wachtwoord" id={props.passwordId} />
      <button onClick={props.handleClick} name={props.buttonName}>{props.buttonText}</button>
    </fieldset>
  )
}
function Navbar() {
  return (

    <nav>
         <fieldset className="nav">
          <a href="/"><button>Home</button></a>
          <span id="currentemail">
            <button className="AllLogin" onClick={login}>Log in</button>
            <button className="AllLogin" onClick={signUp}>Sing up</button>
          </span>
        </fieldset>
        <br />
        <Auth fieldsetId="login" emailId="emaillogin" passwordId="passwordLogin" handleClick={toggleSignIn} buttonName="login" buttonText="Log in"/>
        <fieldset id="login">
          <input type="text" placeholder="email" id="emaillogin" />
          <input type="password" placeholder="wachtwoord" id="passwordlogin" />
          <button onClick={toggleSignIn} name="login">Log in</button>
        </fieldset>

        <fieldset id="signup">
          <input type="text" placeholder="email" id="emailsignup" />
          <input type="password" placeholder="wachtwoord" id="passwordsignup" />
          <button onClick={handleSignUp} name="signup">Sign up</button>
        </fieldset>

    </nav>

  )
}

export default Navbar
