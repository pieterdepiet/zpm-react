
export function toggleSignIn() {
      if (window.firebase.auth().currentUser) {
        // [START signout]
        window.firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('emaillogin').value;
        var password = document.getElementById('passwordlogin').value;
        if (email.length < 4) {
          alert('Geef een emailadres.');
          return;
        }
        if (password.length < 4) {
          alert('Geef een wachtwoord.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        window.firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Verkeerd wachtwoord.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });


        // [END authwithemail]
      }
    }
export function handleSignUp() {
  var email = document.getElementById('emailsignup').value;
  var password = document.getElementById('passwordsignup').value;
  if (email.length < 4) {
    alert('Geef een emailadres.');
    return;
  }
  if (password.length < 4) {
    alert('Geef een wachtwoord.');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  window.firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('Kies een sterker wachtwoord.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    createUser()
    // [END_EXCLUDE]
  });

}
export function sendEmailVerification() {
  // [START sendemailverification]
  window.firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
    // [START_EXCLUDE]
    // [END_EXCLUDE]
  });
  // [END sendemailverification]
}
export function sendPasswordReset() {
  var email = document.getElementById('email').value;
  // [START sendpasswordemail]
  window.firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    // [START_EXCLUDE]
    alert('Password Reset Email Sent!');
    // [END_EXCLUDE]
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END sendpasswordemail];
}
function createUser() {
  var user = localStorage.getItem("user")
  const data = {"presentaties":{0:{"titel":"Voorbeeld", "text":"Een voorbeeldkoptekst", "text1":"Een voorbeeldtekst", "presentatietitel":"Voorbeeld"}}}

  const response = fetch('https://zelfpresentatiemaken.firebaseio.com/gebruikers.json', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
  console.log(response);
}
export function signout() {
  document.getElementById('currentemail').innerHTML = `<button class="AllLogin" onclick="login()">Log in</button>
  <button class="AllLogin" onclick="singUp()">Sing up</button>
  `;
  window.firebase.auth().signOut()
}
export function login() {
  document.getElementById("login").style.display = "inline-block";
  document.getElementById("signup").style.display = "none";

}
export function signUp() {
  document.getElementById("signup").style.display = "inline-block";
  document.getElementById("login").style.display = "none";
}
