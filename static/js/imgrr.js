// Problem 2 (Peekaboo) ------------------------------------------------------
$('#toggle_img').click(function() {
if ($('#toggle_img').text() == "Go Away!") {
	$('#main_img').hide();
	$('#toggle_img').text('Come Back!');	
} else {
	$('#main_img').show(); 
	$('#toggle_img').text('Go Away!');
}
});

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function() {
	var textusertyped = $('#new_img_file').val();
	var texttoshow = "/static/img/" + textusertyped;
	$('#main_img').attr('src', texttoshow);
});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
alert($(this).attr('src'));
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
$('.clickable1').click(function() {
var animals = ($(this).attr('src'));
$('#clickableimg').attr('src', animals);
});