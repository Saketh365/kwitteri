var firebaseConfig = {

apiKey: "AIzaSyBmtR_71DteI_IKejlEcq_UuzKv7-MLXAg",
authDomain: "qwitter-3945e.firebaseapp.com",
databaseURL: "https://qwitter-3945e-default-rtdb.firebaseio.com",
projectId: "qwitter-3945e",
storageBucket: "qwitter-3945e.appspot.com",
messagingSenderId: "815025503310",
appId: "1:815025503310:web:0dd31cc458f527f742971f",
measurementId: "G-X15ER2L34P"};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
     
       
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}