
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCasydkpY_xE2ZSNjSEK68JsZwhTwRHsgw",
      authDomain: "kwitter-7cfdf.firebaseapp.com",
      databaseURL: "https://kwitter-7cfdf-default-rtdb.firebaseio.com",
      projectId: "kwitter-7cfdf",
      storageBucket: "kwitter-7cfdf.appspot.com",
      messagingSenderId: "336517492095",
      appId: "1:336517492095:web:357eb48fd1ab28e4dbbe4a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom() {
          room_name = document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose : "Add room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
    }

function getData() {
      
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}