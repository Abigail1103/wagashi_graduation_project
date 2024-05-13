// 小遊戲頁面



// // let currentPage = document.title; 
// function navigateToNextPage() {
//     // alert(currentPage);
//     if(currentPage=="Let's make a wagashi!"){ //cover
//         gamePage =1;
//     }else if(currentPage=="Introduction"){ //introduction
//         gamePage=2;
//     }else if(currentPage=="step1"){ //ques1
//         gamePage=3;
//     }else if(currentPage=="step2"){ //ques2
//         gamePage=4;
//     }else if(currentPage=="step3"){ //ques3
//         gamePage=5;
//     }else if(currentPage=="step4"){ //ques4
//         gamePage=6;
//     }else if(currentPage=="step5"){ //ques5
//         gamePage=7;
//     }else if(currentPage=="step6"){ //ques6
//         gamePage=8;
//     }    
//     gamePage++;
//     window.open("wagashimakingPage" + gamePage + ".html", "_self"); 
//     // alert(gamePage);

// }

window.onload = function(){
  gsap.fromTo("#all",1,{opacity:0},{opacity:1});
}

let menutoprect=document.querySelector("#menutoprect");
let menu_windowcontent=document.querySelector("#menu_windowcontent");
let btn_menumb=document.querySelector("#btn_menumb");
let isMenuClick=false;


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

  $('#menutoprect').on('click',function () {
    if(!isMenuClick) {
        $('#menu_windowcontent').slideDown(700);
        gsap.fromTo("#btn_menumb",0.6,{y:0},{y:150,ease:"sine.in"});
        isMenuClick = true;
    } else {
        $('#menu_windowcontent').slideUp(650);
        gsap.fromTo("#btn_menumb",0.5,{y:150},{y:0,ease:"sine.in"});
        isMenuClick = false;        
    }
});
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
        "step1": "A"
    });
    let isclick = false;
    let $sentAnswerA = $('#sentAnswerA');
    let $sentAnswerB = $('#sentAnswerB');
    let $sentAnswerC = $('#sentAnswerC');
    let $sentAnswerD = $('#sentAnswerD');
    let $navigateToNextPage = $('#navigateToNextPage');
    
    $sentAnswerA.click(function(e){
      if(!isclick){
        let db = firebase.firestore();
        let usersRef = db.collection("users");
        let docRef = usersRef.doc("000");
        docRef.update({
          // "name": "alva",
          "step1": "A"
        });
        $( "#sentAnswerA" ).addClass( "bgcBlack" );
        isclick = true;
      }else{
        // docRef.update({
        //   "step1": ""
        // });
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
          "step1": "B"
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
          "step1": "C"
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
          "step1": "D"
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
        window.open("wagashimakingPage4.html", "_self"); 
      }
      
    })

});



// function navigateToNextPage() {
//   if(isclick){
//     window.open("wagashimakingPage4.html", "_self"); 
//   }else if(!isclick){
//     alert("請選擇答案");
//   }
  
// }

    
    

