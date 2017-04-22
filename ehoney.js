/**
 * Created by vujita on 12/14/16.
 */
(function(){
    var sec = 1000;
    var loc = window.location.href;
    setTimeout(checkStuff, 5 * sec );
   // setTimeout(skipPageCheck, 250 * sec);
    setTimeout(clickTchaVideo, 10 * sec);
    function skipPageCheck(){
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
        if( skipRegEx.test(loc) || window.location.host !== "www.tvglee.com"){
            jQuery('#video .videodetdiv')[0].click();
            setTimout(function(){
                window.location.href = 'http://www.earnhoney.com/en/videos/';
            }, 20 * sec);
        }
    }
    function checkStuff() {
        jQuery('#callcaptcha').click();
        jQuery('#js-btn-success').click();
        //return;//Turning off skipping for now
        console.log('Doing fun stuff to jwplayer if it is there');
        if (typeof (jwplayer)!=='undefined' && jwplayer && jwplayer()) {
            console.log('jwplayer found');
            console.log('state', jwplayer().getState(),'pos',jwplayer().getPosition(), 'duration', jwplayer().getDuration());
            if(jwplayer().getState() === 'idle'){
                jwplayer().play();
            }
            if(jwplayer().getState() === 'idle' || 
                (jwplayer().getPosition() > 0 && jwplayer().getDuration() > 0)
              ){

                const lastTime = localStorage['last-ad-skip-time'] || 0;
                console.log('lastTime skipped', new Date(lastTime))
                if(localStorage['last-ad-played'] != window.location.href || 
                    (lastTime + 1000*60) < new Date().getTime()
                    ){

                    localStorage['last-ad-played'] = window.location.href;
                    localStorage['last-ad-skip-time'] = new Date().getTime();
                    jwplayer().play().seek(999999).play();
                }
            }
        }
    }
    function clickTchaVideo(){
        if($('#tchavideo').is('visible')){
            $('#tchavideo').click();
        }
    }
})()
