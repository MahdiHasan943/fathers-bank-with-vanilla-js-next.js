// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl-wwW5H6Nd71ZDRRquxSnRjTeR0J-CiM",
    authDomain: "baper-bank-a4875.firebaseapp.com",
    databaseURL: "https://baper-bank-a4875-default-rtdb.firebaseio.com",
    projectId: "baper-bank-a4875",
    storageBucket: "baper-bank-a4875.appspot.com",
    messagingSenderId: "732216194815",
    appId: "1:732216194815:web:1f7a4eef06cd8797083eca",
    measurementId: "G-C0MQ9565DW"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
      document.getElementById("contactForm").reset();
      window.location.href='bank.html'
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };