        console.log("running menuscript");    
           
        $(function () {
			var links = $('.sidebar-links > div > .clickable ~ div > .clickable ~ div > .clickable');

			links.on('click', function () {
                if($(this).hasClass("selected")){
                    links.removeClass('selected');
                }else{
                    links.removeClass('selected');
                    $(this).addClass('selected');
                }
			});  
          });  
            
		$(function () {
            //, .sublinks, .sub-sub-links, 
			var links = $('.sidebar-links > div > .clickable ~ div > .clickable');

			links.on('click', function () {
                if($(this).hasClass("selected")){
                    links.removeClass('selected');
                }else{
                    links.removeClass('selected');
                    $(this).addClass('selected');
                }

			});    
		});
        
        $(function () {
			var links = $('.sidebar-links > div > .clickable');

			links.on('click', function () {
                if($(this).hasClass("selected")){
                    links.removeClass('selected');
                }else{
                    links.removeClass('selected');
                    $(this).addClass('selected');
                }

			});    
		});

       /* $(function () {
			var links = $('.sidebar-links  div.video a');

			links.on('click', function () {
                var position= $(window).scrollTop();
                
                links.removeClass('active');
                 $(this).addClass('active');
                
                var title = $('#videoTitle');
                title.html($(this).html());

                //$(document).scrollTop(position);
                $("html,body").animate({ scrollTop: position }, "slow");
			});    
		});*/
 