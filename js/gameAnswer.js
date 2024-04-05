// 將指定區塊轉成 Canvas
function htmlToCanvas(Answer1) {
    const el = document.getElementById(Answer1);
    html2canvas(el).then(canvas => {
      canvasToImage(canvas);
    });
  }
  
  // 把 Canvas 轉存成圖檔
  function canvasToImage(canvas) {
    const filename = '菓子靈遊戲結果-關東櫻餅兔';
    Canvas2Image.saveAsPNG(
      canvas,
      canvas.width, canvas.height,
      filename
    );
  }