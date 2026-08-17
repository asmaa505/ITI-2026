var canvas = document.querySelector("canvas");
console.log(canvas);

 var ctx = canvas.getContext("2d");

 ctx.fillStyle = "red";

 ctx.fillRect(50,50,100,150);
ctx.fillRect(150,200,100,100);


// starting point
ctx.moveTo(200,50);


// draw line to this point
ctx.lineTo(250,150);
ctx.lineTo(350,70);
ctx.lineTo(550,400);
ctx.stroke();

ctx.beginPath();

ctx.moveTo(100,50);
ctx.lineTo(50,150);
ctx.stroke();  // acutally draw the line

