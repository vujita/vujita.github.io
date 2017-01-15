/**
 * Created by vujita on 12/14/16.
 */
setTimeout(function () {
    var sec = 1000;
    checkStuff();
    setInterval(checkStuff, 10* sec)
    function checkStuff() {
        console.log('Doing fun stuff to jwplayer if it is there');
        if (typeof (jwplayer)!=='undefined' && jwplayer && jwplayer()) {
            console.log('jwplayer found');
            var state = jwplayer().getState();
            console.log('jwplayer state:', state);
            if (state === 'playing') {
                console.log('since playing, seeking');
                var duration = jwplayer().getDuration() || 123123123123123;
                jwplayer().seek(duration*1000);
                console.log("Ask for ad to start playing");
                jwplayer().playAd();
            }else if(state === 'complete'){
                console.log('Player things it is complete, start playing again');
                window.location.reload();
            }
        }
    }
}, 5* sec);
setTimeout(function () {
    window.location.reload();
}, 3 * 60 * 1000)
setTimeout(function(){
    $('#navlogin').click()
    $('#regorlogdiv').click()
},3000)
