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
    
  
    $("#signUp").on("click", function () {
      birdFlyTimeline.pause();
      bounce();
      isStartClick=true;
      // if(isStartClick==true){
      //   window.open("wagashimakingPage2.html", "_self");
      // }
       
    });
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
          
    
});

// function signUp(){
//   window.open("wagashimakingPage2.html", "_self"); 
// };
function navigateToNextPage(){
  window.open("wagashimakingPage3.html","_self");
}
function navigateToMainPage(){
  window.open("index.html#main", "_self"); 
}
// function restart(){
//   window.open("wagashimakingPage2.html","_self");
// }

let isStartClick=false;


let birdFlyTimeline = gsap.timeline({repeat:-1});
let bounceTimeline = gsap.timeline();
let flowersFlyTimeline = gsap.timeline();

function birdFly(){
  // do {  }while{!isStartClick};
  birdFlyTimeline
    .fromTo("#bird",1,{y:0},{y:20})
    .fromTo("#bird",1.5,{y:20},{y:0},1);
};

function flowersFly(){
  flowersFlyTimeline
    .to("#flowers",1,{rotation:45})
    .to("#flowers",1,{rotation:-45});
}

function bounce(){
  bounceTimeline
    // .to("#three",0.5,{height:"250px",ease: "bounce.out"})
    // .to("#bird",0.5,{height:"130px",ease: "bounce.out"},0)
    // .to("#three",0.5,{height:"282.02px",ease: "bounce.out"},1)
    // .to("#bird",0.5,{height:"163.68px",ease: "bounce.out"},1)
    .to("#three", 0.2, { height: "250px", ease: "power4.out" },0)
    .to("#bird", 0.2, { height: "130px", ease: "power4.out" },0)
    .to("#three", 0.2, { height: "282.02px", ease: "power4.out" }, "-=0.1")
    .to("#bird", 0.2, { height: "163.68px", ease: "power4.out" }, "-=0.1")
    .eventCallback("onComplete", function() {
      window.open("wagashimakingPage2.html", "_self");
    });

};

window.onload = function(){
  gsap.fromTo("#all",1,{opacity:0.8},{opacity:1});

  if(!isStartClick){
    birdFly();
    // flowersFly();
  };
    
  
};

