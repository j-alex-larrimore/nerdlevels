    'use strict';


    $(() => {
        let socket = io('<%= host %>' + '/chatter', {
                        transports: ['websocket']
                        });
        let user = '<%= user.fullName %>';
        let userPic = '<%= user.profilePic %>';
                        
        socket.on('connect', () => {
           console.log("connected to nerdlevels");
           socket.emit('join', {
               user,
               userPic
            });
        });
        
        var fn = "Google+Fonts.flv";
        function renderList(){
            //$('.videosList').html('');
            console.log("Rendering List of Videos");
            //ajax({
                //url: host + '/getvideos',
            //    success: function(data){
                   // var videoList = JSON.parse(data.response);
                    //console.log("Rendering " + imageList.length + " videos");
                    //for(var i = 0; i < videoList.length; i++){
                        var str = '<li>';
                        str+= `<video id="video1" class="video-js vjs-default-skin" width="640" height="480" data-setup='{"controls" : true, "autoplay" : true, "preload" : "auto"}'>`;
                        str+= '<source src="https://s3.amazonaws.com/nerdlevels/Platformer/bonus+topics/' + fn + '" type="video/x-flv">';
                        //str+= '<source src="/img/videotest.flv" type="video/x-flv">'
                        str+= '</li>';
                        
                        $('.videosList').append(str);
                   // }
            //    }
           // })
        }
       
        renderList();
        
      /*  
                
                
            </video>
        */
        
    });