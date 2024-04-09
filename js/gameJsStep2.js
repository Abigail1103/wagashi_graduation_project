



$(document).ready(function(){
    // Import the functions you need from the SDKs you need
    // Your web app's Firebase configuration
  firebase.initializeApp({
    apiKey: "AIzaSyAnMv-C7wztTZfXfTZO4tu9O5tHsThClzA",
    authDomain: "gpver2-5c9f5.firebaseapp.com",
    projectId: "gpver2-5c9f5",
    storageBucket: "gpver2-5c9f5.appspot.com",
    messagingSenderId: "202542197889",
    appId: "1:202542197889:web:239b9815371c432fd5b180"
  });
    
  
    let db = firebase.firestore();
    let usersRef = db.collection("users");
    let docRef = usersRef.doc("000");
    // docRef.update({
    //     "name": "alva",
    //     "step1": "B"
    // });
    usersRef.doc("000").update({
        // "name": "alva",
        "step2": ""
    });
    let isclick = false;
    let $sentAnswerA = $('#sentAnswerA');
    let $sentAnswerB = $('#sentAnswerB');
    let $sentAnswerC = $('#sentAnswerC');
    let $sentAnswerD = $('#sentAnswerD');
    let $navigateToNextPage = $('#navigateToNextPage');
    let $navigateToLastPage = $('#navigateToLastPage');
    
    $sentAnswerA.click(function(e){
      if(!isclick){
        let db = firebase.firestore();
        let usersRef = db.collection("users");
        let docRef = usersRef.doc("000");
        docRef.update({
          // "name": "alva",
          "step2": "A"
        });
        $( "#sentAnswerA" ).addClass( "bgcBlack" );
        isclick = true;
      }else{
        $( "#sentAnswerA" ).removeClass( "bgcBlack" );
        isclick = false;
      }
    })

    $sentAnswerB.click(function(e){
      if(!isclick){
        let db = firebase.firestore();
        let usersRef = db.collection("users");
        let docRef = usersRef.doc("000");
        docRef.update({
          // "name": "alva",
          "step2": "B"
        });
        $( "#sentAnswerB" ).addClass( "bgcBlack" );
        isclick = true;
      }else{
        $( "#sentAnswerB" ).removeClass( "bgcBlack" );
        isclick = false;
      }
    })

    $sentAnswerC.click(function(e){
      if(!isclick){
        let db = firebase.firestore();
        let usersRef = db.collection("users");
        let docRef = usersRef.doc("000");
        docRef.update({
          // "name": "alva",
          "step2": "C"
        });
        $( "#sentAnswerC" ).addClass( "bgcBlack" );
        isclick = true;
      }else{
        $( "#sentAnswerC" ).removeClass( "bgcBlack" );
        isclick = false;
      }
    })

    $sentAnswerD.click(function(e){
      if(!isclick){
        let db = firebase.firestore();
        let usersRef = db.collection("users");
        let docRef = usersRef.doc("000");
        docRef.update({
          // "name": "alva",
          "step2": "D"
        });
        $( "#sentAnswerD" ).addClass( "bgcBlack" );
        isclick = true;
      }else{
        $( "#sentAnswerD" ).removeClass( "bgcBlack" );
        isclick = false;
      }
    })
    $navigateToNextPage.click(function(e) {
      // if() 監聽firebase資料 若為""則不能跳下一頁
      if(!isclick){
        alert("請選擇答案");
      }else{
        window.open("wagashimakingPage5.html", "_self"); 
      }
      
    })
    $navigateToLastPage.click(function(e) {
        window.open("wagashimakingPage3.html", "_self"); 
      
    })
      

});