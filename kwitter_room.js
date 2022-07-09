const firebaseConfig = {
    apiKey: "AIzaSyAUK5P1zs3n3mmcQ1zjGPoGh6hXpmk9vSg",
    authDomain: "social-website-b3cca.firebaseapp.com",
    projectId: "social-website-b3cca",
    storageBucket: "social-website-b3cca.appspot.com",
    messagingSenderId: "218474140304",
    appId: "1:218474140304:web:bde6c3b7e3639673bb7e15",
    measurementId: "G-XZVSKRKLQK"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();