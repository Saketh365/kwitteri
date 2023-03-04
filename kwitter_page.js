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


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
getData();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class = 'user_tick' src = 'tick.png ></h4> ";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class =,'btn btn-warning' id = "+firebase_message_id+" value = " +like+" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
console.log("room name -" + room_names);
row = "<div class = 'room_name' id = "+room_names+" onclick = 'redirectToRoomName(this.id)'>#" + room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
} }); }); }

     console.log(firebase_message_id);
     console.log(message_data);
     name = message_data["name"];
     message = message_data['message'];

//End code
       });  }); }
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

