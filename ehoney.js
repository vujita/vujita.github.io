/**
 * Created by vujita on 12/14/16.
 */
(function(){
    var sec = 1000;
    var loc = window.location.href;
    var skipIfMatch = [
        'therapy_duck_as_service_animal_',
        'uk_robo_chef_p4',
        'egyptian_wild_animal_trainer_',
        'how_to_cook_shrimp_gyoza',
        'baby_animals_p3',
        'three_easy_and_healthy_juice_options',
        'gina',
        'mince_pie_recipe',
        'ufc_dan_henderson',
        'calia_by_carrie_underwood',
        'tom_hanks_on_new_film_inferno',
        'penguin_wetsuit',
        'celebrities_weigh_in_on_presidential_debate',
        'rob_lowe_interview',
        'puppy_bowl_xiii_highlights',
        'backstreet_boys',
        '_curry_',
        'gigi_hadid',
    ];
    var skipRegEx = new RegExp('('+ skipIfMatch.join('|')+')');
    if( skipRegEx.test(loc) ){
        jQuery('#video .videodetdiv')[0].click();
        setTimout(function(){
            if(window.location.host !== "www.tvglee.com"){
                window.location.href = 'http://www.earnhoney.com/en/videos/';
            }
        }, 20 * sec);
    }
    setTimeout(function () {
        checkStuff();
        function checkStuff() {
            jQuery('#callcaptcha').click();
            jQuery('#js-btn-success').click();
            //return;//Turning off skipping for now
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
                    setTimeout(function(){
                        console.log("Ask for ad to start playing");
                        jwplayer().playAd();
                    },3000)                    
                }else if(state === 'complete'){
                    console.log('Player things it is complete, start playing again');
                    window.location.reload();
                }
            }
            if($('#tchavideo').is('visible')){
                $('#tchavideo').click();
            }
        }
        setInterval(checkStuff, 20 * sec);
    }, 4 * sec );
    
    //Restart every 5 mins
    setTimeout(function () {
        window.location.reload();
    }, 3 * 60 * 1000);
    
    setTimeout(function(){
        $('#navlogin').click()
        $('#regorlogdiv').click()
    },3000)
})()
