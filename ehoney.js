/**
 * Created by vujita on 12/14/16.
 */
(function(){
    var sec = 1000;
    if(
        /therapy_duck_as_service_animal_/.test(window.location.href) ||        
        /uk_robo_chef_p4/.test(window.location.href)
      ){
     window.location.href = 'http://www.earnhoney.com/en/videos/';
    }
    setTimeout(function () {
        checkStuff();
//         setInterval(checkStuff, 60* sec)
        function checkStuff() {
            console.log('Doing fun stuff to jwplayer if it is there');
            if (typeof (jwplayer)!=='undefined' && jwplayer && jwplayer()) {
                console.log('jwplayer found');
                var state = jwplayer().getState();
                console.log('jwplayer state:', state);
                if (state === 'playing') {
                    console.log('since playing, seeking');
                    var duration = jwplayer().getDuration() || 123123123123123;
                    jwplayer().seek(1000*1000);
                    console.log("Ask for ad to start playing");
                    jwplayer().playAd();
                }else if(state === 'complete'){
                    console.log('Player things it is complete, start playing again');
                    window.location.reload();
                }
            }
            if($('#tchavideo').is('visible')){
                $('#tchavideo').click();
            }
        }
    }, 10 * sec );
    setTimeout(function () {
        window.location.reload();
    }, 1.5 * 60 * 1000)
    setTimeout(function(){
        $('#navlogin').click()
        $('#regorlogdiv').click()
    },3000)
})()
