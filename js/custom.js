---
---
// when checkbox is checked / unchecked for embedded code then unhide / hide the instructions respectively
{% for example in site.data.endpoints %}
$('#setup-checkbox-{{example.os}}-{{example.connectivity}}').click(function(){
	if ($(this).is(':checked')){
		$('#instructions').fadeIn();
		$('.instructions-ep-{{example.os}}-{{example.connectivity}}').fadeIn();
	}
	else {
		$('.instructions-ep-{{example.os}}-{{example.connectivity}}').fadeOut();	
	}
})
{% endfor %}

// when checkbox is checked / unchecked for web code then unhide / hide the instructions respectively
{% for webapp in site.data.webapps %}
$('#setup-checkbox-{{webapp.title}}').click(function(){
	if ($(this).is(':checked')){
		$('#instructions').fadeIn();
		$('.instructions-wa-{{webapp.title}}').fadeIn();
	}
	else {
		$('.instructions-wa-{{webapp.title}}').fadeOut();	
	}
})
{% endfor %}