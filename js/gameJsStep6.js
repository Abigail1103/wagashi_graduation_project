
window.onload = function(){
  gsap.fromTo("#all",1,{opacity:0},{opacity:1});
}


$(document).ready(function(){
  // Import the functions you need from the SDKs you need
  // Your web app's Firebase configuration
// firebase.initializeApp({
//   apiKey: "AIzaSyAnMv-C7wztTZfXfTZO4tu9O5tHsThClzA",
//   authDomain: "gpver2-5c9f5.firebaseapp.com",
//   projectId: "gpver2-5c9f5",
//   storageBucket: "gpver2-5c9f5.appspot.com",
//   messagingSenderId: "202542197889",
//   appId: "1:202542197889:web:239b9815371c432fd5b180"
// });
firebase.initializeApp({
  apiKey: "AIzaSyBd3cIhKt9AGx8i2PB85TdjF_xgJjUFMk4",
  authDomain: "gpver3.firebaseapp.com",
  projectId: "gpver3",
  storageBucket: "gpver3.appspot.com",
  messagingSenderId: "548134673228",
  appId: "1:548134673228:web:72831ef32df330f1908de9",
  measurementId: "G-B2E6N8M01D"
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
      "step6": "A"
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
        "step6": "A"
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
        "step6": "B"
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
        "step6": "C"
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
        "step6": "D"
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
      let db = firebase.firestore();
      let usersRef = db.collection("users");
      let docRef = usersRef.doc("000");
      let Zone=0;
      let AnswerZone=0;
      let x=0;
      let y=0;
      docRef.get().then(function(doc){
        let Answer=[`${doc.data().step1}`, `${doc.data().step2}`, `${doc.data().step3}`, `${doc.data().step4}`, `${doc.data().step5}`, `${doc.data().step6}`];
        for(let i=0; i<6;i++){
          switch(Answer[i]){
            case 'A':x++;
            break;
            case 'B':y++;
            break;
            case 'C':x--;
            break;
            case 'D':y--;
            break;
          };
          
        };
        if(x>0 && y>=0){
          Zone = 1;
          if(Math.abs(x)>Math.abs(y)){
            AnswerZone=1;
            // alert(AnswerZone);
            window.open("finalAnswer1.html", "_self");
          }else if(Math.abs(x)<=Math.abs(y)){
            AnswerZone=2;
            // alert(AnswerZone);
            window.open("finalAnswer2.html", "_self");
          }
        }else if(x<=0 && y>0){
          Zone = 2;
          if(Math.abs(x)>Math.abs(y)){
            AnswerZone=3;
            // alert(AnswerZone);
            window.open("finalAnswer3.html", "_self");
          }else if(Math.abs(x)<=Math.abs(y)){
            AnswerZone=4;
            // alert(AnswerZone);
            window.open("finalAnswer4.html", "_self");
          }
        }else if(x<0 && y<=0){
          Zone =3;
          if(Math.abs(x)>Math.abs(y)){
            AnswerZone=5;
            // alert(AnswerZone);
            window.open("finalAnswer5.html", "_self");
          }else if(Math.abs(x)<=Math.abs(y)){
            AnswerZone=6;
            // alert(AnswerZone);
            window.open("finalAnswer6.html", "_self");
          }
        }else if(x>=0 && y<0){
          Zone =4;
          if(Math.abs(x)>Math.abs(y)){
            AnswerZone=7;
            // alert(AnswerZone);
            window.open("finalAnswer7.html", "_self");
          }else if(Math.abs(x)<=Math.abs(y)){
            AnswerZone=8;
            // alert(AnswerZone);
            window.open("finalAnswer8.html", "_self");
          }
        }
      });
    
    }
  });

  $navigateToLastPage.click(function(e) {
      window.open("wagashimakingPage7.html", "_self"); 
    
  })
    

});