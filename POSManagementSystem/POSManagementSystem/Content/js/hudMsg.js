// HUD Messages
	function hudMsg(type, message, timeOut) {

		$('.hudmsg').remove();

		if( ! timeOut ) {
			timeOut = 3000;
		}
		
		var timeId = new Date().getTime();
		
		if( type != '' && message != '' ) {
		
			$('<div class="hudmsg '+type+'" id="msg_'+timeId+'"><img src="../images/msg_'+type+'.png" alt="" />'+message+'</div>').hide().appendTo('body').fadeIn();
			
			var timer = setTimeout(
				function() {
					$('.hudmsg#msg_'+timeId+'').fadeOut('slow', function() {
						$(this).remove();
					});
				}, timeOut
			);
		}
	}