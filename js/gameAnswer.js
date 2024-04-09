function screenshot1(){
  html2canvas(document.getElementById('Answer1')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '西櫻餅兔菓子靈.jpg';
      a.click();
  });
}
function screenshot2(){
  html2canvas(document.getElementById('Answer2')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '東櫻餅兔菓子靈.jpg';
      a.click();
  });
}
function screenshot3(){
  html2canvas(document.getElementById('Answer3')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '史萊姆錦玉菓子靈.jpg';
      a.click();
  });
}
function screenshot4(){
  html2canvas(document.getElementById('Answer4')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '水族箱錦玉菓子靈.jpg';
      a.click();
  });
}
function screenshot5(){
  html2canvas(document.getElementById('Answer5')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '銅鑼燒狐狸菓子靈.jpg';
      a.click();
  });
}
function screenshot6(){
  html2canvas(document.getElementById('Answer6')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '生銅鑼燒狐狸菓子靈.jpg';
      a.click();
  });
}
function screenshot7(){
  html2canvas(document.getElementById('Answer7')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '麻糬山雀菓子靈.jpg';
      a.click();
  });
}
function screenshot8(){
  html2canvas(document.getElementById('Answer8')).then(function(canvas) {
      document.body.appendChild(canvas);
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = '烤麻糬山雀菓子靈.jpg';
      a.click();
  });
}

  function navigateToMainPage(){
    window.open("index.html#main", "_self"); 
  }

  function restart(){
    window.open("wagashimakingPage2.html","_self");
  }