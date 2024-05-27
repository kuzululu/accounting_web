$(document).on('pagecreate', function(evt){
	$('cont_form').on('tap', function(e){
		function numKey(evt){
			var charCode = (evt.which) ? evt.which : event.keyCode;

			if (charCode > 31 &&(charCode < 48 || charCode > 57)) {
				return false;
			}
			return true;
		}
	});
});