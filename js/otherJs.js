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
};


let cloud1MovingTimeline = gsap.timeline({repeat:-1});
let cloud2MovingTimeline = gsap.timeline({repeat:-1});
let cloud3MovingTimeline = gsap.timeline({repeat:-1});
let cloud4MovingTimeline = gsap.timeline({repeat:-1});

function cloud1Moving(){
    cloud1MovingTimeline
        .fromTo("#cloud1",2,{x:0},{x:40})
        .fromTo("#cloud1",2,{x:40},{x:0}); 
}
function cloud2Moving(){
    cloud2MovingTimeline
        .fromTo("#cloud2",1.5,{x:0},{x:-40})
        .fromTo("#cloud2",1.5,{x:-40},{x:0}); 
}
function cloud3Moving(){
    cloud3MovingTimeline
        .fromTo("#cloud3",2,{y:0},{y:20})
        .fromTo("#cloud3",2,{y:20},{y:0}); 
}
function cloud4Moving(){
    cloud4MovingTimeline
        .fromTo("#cloud4",1.5,{y:0},{y:-20})
        .fromTo("#cloud4",1.5,{y:-20},{y:0}); 
}

window.onload = function(){
    cloud1Moving();
    cloud2Moving();
    cloud3Moving();
    cloud4Moving();
}