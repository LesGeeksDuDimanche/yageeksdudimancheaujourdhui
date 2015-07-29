var d = new Date();
var ladate = d.getDay(); 

$(function() {

	if (ladate > 0 ){
		$("#message").html("T'es con");
	} else {
		$("#message").html("Evidemment");
	}

    $("#message").fadeOut("slow",function(){
      $(this).fadeIn("slow");
    });

});