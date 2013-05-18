$(document).ready(function(){
	 function socialConstructor () {
			this.poc = function(username, error, success){
				$.ajax({url:'http://pile-of-cash.com/social-networks/'+username,
					dataType:'html',
					error: function(e) {
						error(e);
					},
					success: function (s) {
						
						
						success(s);


					}
				});

			}			
	 }
	
	
	$('body').on('click touchstart','button#search', function(){
		
		var money = new socialConstructor(),
			username = $('#username').val();
			if(username !== ''){
				money.poc(username,
					function (e) {console.log('error',e);},
					function (s) {
						
						
						$('#result').html(s);

				});
			}


	});

	$('#result').find('meta').each(function(i, k){
		console.log('meta', i, k);
	});
	// console.log(social.poc('etanlubeck'));
});	