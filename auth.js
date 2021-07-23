var firebaseConfig = {
    apiKey: "AIzaSyCzjSVMrgIz99mWxM6krweJ3KowF9rVO78",
    authDomain: "iot-demo-16f2c.firebaseapp.com",
    databaseURL: "https://iot-demo-16f2c-default-rtdb.firebaseio.com",
    projectId: "iot-demo-16f2c",
    storageBucket: "iot-demo-16f2c.appspot.com",
    messagingSenderId: "259884158772",
    appId: "1:259884158772:web:fb55aa71471268cfec5f61",
    measurementId: "G-GEDPH9CV5H"
    };

  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

firebase.auth().onAuthStateChanged(user => {
 if (user) {
  const { currentUser } = firebase.auth();
  console.log('Currently logged in user', currentUser);
  //alert(user.uid);
  alert(currentUser.uid);
  document.getElementById("signIn").style.display = "none";
  document.getElementById("signUp").style.display = "none";
     document.getElementById("signOut").style.display = "block";
     document.getElementById("DownloadV1").style.display = "block";
     document.getElementById("DownloadV2").style.display = "block";
     document.getElementById("DownloadV3").style.display = "block";
     document.getElementById("DownloadV4").style.display = "block";
     document.getElementById("UserIDbox").style.display = "block";
     document.getElementById("InstalledVersionbox").style.display = "block";
     document.getElementById("GetVersion").style.display = "block";
     document.getElementById("Dignosticsbox").style.display = "block";
     document.getElementById("SendTxt").style.display = "block";
     document.getElementById("YourDignosticsbox").style.display = "block";
     document.getElementById("GetText").style.display = "block";

  // save the current user's uid to redux store.
 } else {
     document.getElementById("signOut").style.display = "none";
     document.getElementById("DownloadV1").style.display = "none";
     document.getElementById("DownloadV2").style.display = "none";
     document.getElementById("DownloadV3").style.display = "none";
     document.getElementById("DownloadV4").style.display = "none";
     document.getElementById("UserIDbox").style.display = "none";
     document.getElementById("InstalledVersionbox").style.display = "none";
     document.getElementById("GetVersion").style.display = "none";
     document.getElementById("Dignosticsbox").style.display = "none";
     document.getElementById("SendTxt").style.display = "none";
     document.getElementById("YourDignosticsbox").style.display = "none";
     document.getElementById("GetText").style.display = "none";
       document.getElementById("signIn").style.display = "block";
       document.getElementById("signUp").style.display = "block";
     alert("No Active user Found");


  // delete the current user's uid from the redux store.
 }
})