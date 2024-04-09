let menutoprect=document.querySelector("#menutoprect");
let menu_windowcontent=document.querySelector("#menu_windowcontent");
let btn_menumb=document.querySelector("#btn_menumb");
let isMenuClick=false;

$(document).ready(function () {

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



function navigateToMainPage(){
    window.open("index.html#main", "_self"); 
  }