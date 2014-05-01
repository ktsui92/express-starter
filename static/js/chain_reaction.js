$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var gameState = 'menu';
  var menuText= 'Click to play!';
  var reacting = false;
  var numReacted = 0;
var reactions = [];
var numBalls = 9;
var balls = [];

for (i=0;i<numBalls;i++) {
  var b0 = {x:width*Math.random(),y:height*Math.random(),radius:10,vx:Math.random()*(10)-5,vy:Math.random()*(10)-5};
balls.push(b0);
}
  // Run an interation of the game
  var updateGame = function() {
    if (gameState == 'menu') {
      context.fillStyle = 'blue';
      context.font = "20px Arial";
      context.fillText(menuText,10,40);
    }
    for (var i = 0; i < balls.length; i++) {
var collided = false;
for (var j = 0; j < reactions.length; j++) {
  var xdiff=balls[i].x-reactions[j].x;
  var ydiff=balls[i].y-reactions[j].y;
  var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
  if (dist<balls[i].radius+reactions[j].radius) {
    collided=true;
    numReacted++;
  }
}
if (collided) {
  var b = {x:balls[i].x,y:balls[i].y,radius:1,vx:Math.random()*10-5,vy:Math.random()*(10)-5, timer:0};
  reactions.push(b);
  balls.splice(i,1);
  i--;
}

}

    context.beginPath();
    context.rect(0,0,width,height);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();

    // PUT STUFF HERE
for(var i = 0; i < balls.length; i++) {
  //right
  if(balls[i].x+balls[i].radius>width) {
    balls[i].vx = -balls[i].vx;
  }
  if(balls[i].x-balls[i].radius<0) {
    balls[i].vx = -balls[i].vx;
  }
  //bottom
  if (balls[i].y+balls[i].radius>height) {
    balls[i].vy = -balls[i].vy;
  }
  if (balls[i].y-balls[i].radius<0) {
    balls[i].vy= -balls[i].vy;
  }


  balls[i].x=balls[i].x+balls[i].vx;
  balls[i].y=balls[i].y+balls[i].vy;
}
for (var i = 0; i < balls.length; i++) {

context.beginPath();
context.arc(balls[i].x,balls[i].y,balls[i].radius,20,20*Math.PI);
context.fillStyle = 'black';
context.fill();
context.closePath();

}
for (var i=0;i<reactions.length;i++) {
context.beginPath();

context.arc(reactions[i].x,reactions[i].y,reactions[i].radius,20,20*Math.PI);
context.fillStyle = 'black';
context.fill();
context.closePath();

}
requestAnimationFrame(updateGame);
for (var i = 0; i<reactions.length;i++) {
  reactions[i].timer++;
  if(reactions[i].timer > 200) {
    reactions[i].radius--;

  } else if(reactions[i].radius<30) {
    reactions[i].radius++;
  }
  if(reactions[i].radius==0) {
    reactions.splice(i,1);
    i--;
  }
}
context.fillStyle='blue';
context.font = "20px Arial";
context.fillText("Reactions:"+numReacted,10,20);
}
for (var i=0;i<numBalls;i++) {
  var b0 = {x:width*Math.random(),y:height*Math.random(),radius:10,vx:Math.random()*(10)-5,vy:Math.random()*(10)-5};
  balls.push(b0);
}
  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    if(!reacting) {
      reacting=true;
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
    var b = {x:x,y:y,radius:30,vx:Math.random()*(10)-5,vy:Math.random()*(10)-5,timer:0};
    reactions.push(b);
}

  });

  updateGame();
});
