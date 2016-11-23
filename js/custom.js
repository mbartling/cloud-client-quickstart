---
---
function controlRunButton(change){
	object = ".setup-button .page-scroll";
	if(change == "increase"){
		// increase opacity of button
		var value = parseFloat($(object).css('opacity'));
		console.log("Value = " +value)
		 if(value < 1){
			value +=0.5;
			console.log("New Value = " +value);
			$(object).css('opacity',value);
		 }
	} else if(change == "decrease"){
		// decrease opacity of button
		var value = parseFloat($(object).css('opacity'));
		console.log("Value = " +value)
		 if(value > 0){
			value -=0.5;
			console.log("New Value = " +value);
			$(object).css('opacity',value);
		 }
		 if(value == 0){
		 	$('#instructions').fadeOut(2000);
		 }
	} else{
		// Do nothing else
		return;
	}
}

// when checkbox is checked / unchecked for embedded code then unhide / hide the instructions respectively
{% for example in site.data.endpoints %}
$('#setup-checkbox-{{example.os}}-{{example.connectivity}}').click(function(){
	if ($(this).is(':checked')){
		$('#instructions').fadeIn();
		$('.instructions-ep-{{example.os}}-{{example.connectivity}}').fadeIn();
		controlRunButton('increase');
		
	}
	else {
		$('.instructions-ep-{{example.os}}-{{example.connectivity}}').fadeOut();
		controlRunButton('decrease');
	}
})
{% endfor %}

// when checkbox is checked / unchecked for web code then unhide / hide the instructions respectively
{% for webapp in site.data.webapps %}
$('#setup-checkbox-{{webapp.title}}').click(function(){
	if ($(this).is(':checked')){
		$('#instructions').fadeIn();
		$('.instructions-wa-{{webapp.title}}').fadeIn();
		controlRunButton('increase');
	}
	else {
		$('.instructions-wa-{{webapp.title}}').fadeOut();	
		controlRunButton('decrease');
	}
})
{% endfor %}