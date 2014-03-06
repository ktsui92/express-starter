$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

$('#p1').click(function() {
	context.strokeStyle = 'orange';
	context.strokeRect(30,30,150,100);
});

$('#p2').click(function() {
	context.strokeStyle = 'blue';
	context.strokeRect(50,50,100,100);
});

$('#p3').click(function() {
	context.beginPath();
	context.arc(200,150,125,2,4);
	context.stroke()
});

$('#p4').click(function() {
	context.beginPath();
	context.arc(250,150,125,2,9);
	context.stroke();
});

$('#p5').click(function(){
	context.moveTo(250,250);
	context.lineTo(80,100);
	context.stroke();

});


  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
