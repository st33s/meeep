$( document ).ready(function() {
    //console.log('hello MAMDT');

    $(document).ready(function(){
	    $('.acc h3').click(function(){
		    $(this).next('.content').slideToggle();
		    $(this).parent().toggleClass('active');
		    $(this).parent().siblings().children('.content').slideUp();
		    $(this).parent().siblings().removeClass('active');
	    });
    });

    var player = videojs('workshop0');
    var playerWrap = $('.container-video');

    player.ready(function(){

        
        var duration = player.duration();
        console.log(duration);

        player.on('timeupdate', function(){
            var time = player.currentTime();

            console.log(time);

            if(time >= duration){
                console.log('einde');

                playerWrap.append('<div class="done"></div>');
            }
        });








    });
    

    




})