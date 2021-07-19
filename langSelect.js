$(document).ready( function () {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	var selectedLang = urlParams.get('submit')
	$('[lang]').hide();
	switch (selectedLang) {
		case 'en':
			$('[lang="en"]').show();
			document.getElementById("enSelect").selected=true;
		break;
		case 'es':
			$('[lang="es"]').show();
			document.getElementById("esSelect").selected=true;
		break;
		default:
			$('[lang="en"]').show();
			document.getElementById("enSelect").selected=true;
	}
});


$(function() {
	$('#lang-select').change(function(){
		var language= $(this).val();
//		alert(language);
		switch (language) {
			case 'en':
				$('[lang]').hide();
				$('[lang="en"]').show();
			break;
			case 'es':
				$('[lang]').hide();
				$('[lang="es"]').show();
			break;
			default:
				$('[lang]').hide();
				$('[lang="en"]').show();
		}
			
	});
});
