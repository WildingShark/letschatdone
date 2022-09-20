var firebaseConfig = {
    apiKey: "AIzaSyAZtXRfVlCHsajnU3S62npJT7jO1NPQlaU",
    authDomain: "letschat-efc62.firebaseapp.com",
    databaseURL: "https://letschat-efc62-default-rtdb.firebaseio.com",
    projectId: "letschat-efc62",
    storageBucket: "letschat-efc62.appspot.com",
    messagingSenderId: "520919921178",
    appId: "1:520919921178:web:b74432ba4532e2cb5497a3",
    measurementId: "G-C8M07KHLLK"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("add_room");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";

}