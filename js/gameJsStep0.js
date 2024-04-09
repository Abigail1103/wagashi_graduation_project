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
    
  
    // let db = firebase.firestore();
    // let usersRef = db.collection("users");
    // let docRef = usersRef.doc("000");
    
    // 尚未完成
    
    // $signUp.click(function(e) {
    //   let db = firebase.firestore();
    //   let usersRef = db.collection("users");
    //   let $name = $('#name');
    //   let userName = $name.val();
    //   // let userName = $('#name').val(); // 获取输入框的值
    //   if (userName.trim() !== '') { // 检查姓名是否为空
    //       usersRef.add({
    //           `${$name.val()}` // 将姓名发送到 Firebase
    //       })
    //     }
    //   });

    $signUp.click(function(e) {
        window.open("wagashimakingPage2.html", "_self"); 
      
    })
});

function signUp(){
  window.open("wagashimakingPage2.html", "_self"); 
};
function navigateToNextPage(){
  window.open("wagashimakingPage3.html","_self");
}
function navigateToMainPage(){
  window.open("index.html#main", "_self"); 
}