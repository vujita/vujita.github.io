/**
 * Created by vujita on 12/14/16.
 */
(function(){
    var sec = 1000;
    var loc = window.location.href;
    if(
        /therapy_duck_as_service_animal_/.test(loc) ||        
        /uk_robo_chef_p4/.test(loc) || 
        /egyptian_wild_animal_trainer_/.test(loc) ||
        /how_to_cook_shrimp_gyoza_p3/.test(loc) ||
        /baby_animals_p3/.test(loc)
      ){
    jQuery('#video .videodetdiv')[0].click()
     //window.location.href = 'http://www.earnhoney.com/en/videos/';
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
                console.log('jwplayer position:', jwplayer().getPosition());
                if (state === 'playing' && jwplayer().getPosition() != 0) {
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
        setInterval(checkStuff, 10 * sec);
    }, 10 * sec );
    
    //Restart every 5 mins
    setTimeout(function () {
        window.location.reload();
    }, 5 * 60 * 1000);
    
    setTimeout(function(){
        $('#navlogin').click()
        $('#regorlogdiv').click()
    },3000)
})()
