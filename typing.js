$(document).ready(function () {
	$("#search").typewriter();

	var replacements = {
	    "Zeug": "kein Zeug"
	}

$("#search").val(function(i, val){
    val = val.split('');

    $.each(val, function(i,e){
        val[i] = replacements[e] ? replacements[e] : e;
    });

    return val.join('');
});

});