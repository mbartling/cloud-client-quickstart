---
---
// when checkbox is checked / unchecked for embedded code then unhide / hide the instructions respectively
{% for example in site.data.endpoints %}
$('#setup-checkbox-{{example.os}}-{{example.connectivity}}').click(function(){
	if ($(this).is(':checked')){
		$('#instructions').css('display','inline');
		$('.instructions-ep-{{example.os}}-{{example.connectivity}}').css('display','inline');
	}
	else {
		$('.instructions-ep-{{example.os}}-{{example.connectivity}}').css('display','none');	
	}
})
{% endfor %}

// when checkbox is checked / unchecked for web code then unhide / hide the instructions respectively
{% for webapp in site.data.webapps %}
$('#setup-checkbox-{{webapp.title}}').click(function(){
	if ($(this).is(':checked')){
		$('#instructions').css('display','inline');
		$('.instructions-wa-{{webapp.title}}').css('display','inline');
	}
	else {
		$('.instructions-wa-{{webapp.title}}').css('display','none');	
	}
})
{% endfor %}