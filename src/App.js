import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import logo from './logo.svg';
import './App.css';






function App() {

  const [user, setUser] = useState({ user: {}})

  useEffect(() => {
    window.firebase.auth().onAuthStateChanged(function(user) {
      //document.getElementById('quickstart-verify-email').disabled = true;
      if (user) {
        setUser(user)
        // DOEL: user opslaan in de 'state' van de app
        // "state"
        localStorage.setItem("user", user.uid)
        if(user.emailVerified === false){
          //sendEmailVerification()
        }
        console.log(user)
        // [END_EXCLUDE]
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        Array.from(document.getElementsByClassName('AllLogin')).forEach(element => element.style.display = "none")
        document.getElementById('currentemail').innerHTML = '<a href="/pages"><button>Uw pagina\'s</button></a>' + email + '<button onClick="{signout}">Uitloggen</button>'
        document.getElementById('login').style.display = "none"
        // = email + '<br><button onClick="firebase.auth().signOut()">Uitloggen</button>'
        // [START_EXCLUDE]

        if (!emailVerified) {

        }
        // [END_EXCLUDE]
      }
    });
  })

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          zpm { user.email }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
