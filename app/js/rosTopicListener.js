'use strict';

const INTRO = 'INTRO';
const TELL_JOKE = 'TELL_JOKE';
const CRICKETS = 'CRICKETS';
const APPLAUSE = 'APPLAUSE';
const NONE = 'NONE';
const WEATHER = 'WEATHER';
const GREETING = 'GREETING';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';
// https://bl.ocks.org/mbostock/5872848
var dispatch = d3.dispatch("speak", "speakRepeat", "drummer");


var startJoke = function(duration) {
    dispatch.speak({
        "duration": duration
    });
}

var triggerJokeRepeat = function() {
    document.querySelector(".repeatJoke").click();
}

var startJokeRepeat = function(duration, shiftRobots) {
    if (shiftRobots === 'true') {
        weatherRobotShift();
    }
    dispatch.speakRepeat({
        "duration": duration
    });
}

var triggerPunchLine = function() {
    document.querySelector(".punchLine").click();
}

var startPunchLine = function(duration) {
    dispatch.speak({
        "duration": duration
    });
}

var triggerGreetingResponse = function() {
    document.querySelector(".greetingResponse").click();
}

// var startGreetingResponse = function(duration) {
//     dispatch.speak({
//         "duration": duration
//     });
// }

var triggerRosieResponse = function() {
    document.querySelector(".rosieResponse").click();
}

// var startRosieResponse = function(duration) {
//     dispatch.speakRepeat({
//         "duration": duration
//     });
// }

var triggerJokeBotAngry = function() {
    document.querySelector(".jokeBotAngry").click();
}

// var startJokeBotAngry = function(duration) {
//     dispatch.speak({
//         "duration": duration
//     });
// }


var triggerFinalWord = function() {
    document.querySelector(".finalWord").click();
}


var rimShot = function() {
    dispatch.drummer({
        "test": "this is a test"
    });
    document.getElementById("rimShot").play();
}

var crickets = function() {
    document.getElementById("crickets").play();
}

var applause = function() {
    document.getElementById("applause").play();
}

// Connecting to ROS
// -----------------

var ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function() {
    //console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
    //console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
    //console.log('Connection to websocket server closed.');
});


// Subscribing to a Topic
// ----------------------

var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/chatter',
    messageType: 'std_msgs/String'
});
var lastDate = new Date((new Date()).getTime() - 10000);
var lastJokeDate = new Date((new Date()).getTime() - 1000);
var lastWeatherDate = new Date((new Date()).getTime() - 1000);

document.addEventListener('keydown', handleKeyDown);
listener.subscribe(handleEvent);

/**
 * Handles keyboard events.
 * @param {Object} e
 */
function handleKeyDown(e){
    var message = {
        data: NONE
    };
    switch(e.which) {
        //j
        case 74:
        message.data = TELL_JOKE;
        break;
        //y
        case 89:
        message.data = APPLAUSE;
        break;
        //n
        case 78:
        message.data = CRICKETS;
        break;
        //w
        case 87:
        message.data = WEATHER;
        break;
        //g
        case 71:
        message.data = GREETING;
        break;
        //spacebar
        case 32:
        message.data = INTRO;
        break;
    }

    handleEvent(message, true);
}

/**
 * Handles arduino or keyboard type event.
 * @param {Object} message
 * @param {Boolean} isKeyEvent
 */
function handleEvent(message, isKeyEvent){
        var voiceTypeMale = '"UK English Male",';
        var voiceTypeFemale = '"UK English Female",';

        console.log('message.data', message.data);

        if (message.data === TELL_JOKE && (lastJokeDate.getTime() + 1000) < new Date()) {
            //console.log('in TELL_JOKE');
            var shiftRobots = false;
            lastJokeDate = new Date();
            lastDate = new Date();
            var nextJokeIndex = Math.floor((Math.random() * data.jokes.length));
            var onClickJoke = 'responsiveVoice.speak("' + data.jokes[nextJokeIndex].joke + '", ' + voiceTypeMale +
            '{rate: 1, onstart: startJoke("' + calculateJokeDuration(data.jokes[nextJokeIndex].joke) + '"), onend: triggerJokeRepeat});';
            var onClickRepeatJoke = 'responsiveVoice.speak("' +  data.jokes[nextJokeIndex].repeatJoke + '", ' + voiceTypeFemale +
            '{onstart: startJokeRepeat("' + calculateJokeDuration(data.jokes[nextJokeIndex].repeatJoke) + '","' + shiftRobots + '"), onend: triggerPunchLine});';
            var onClickPunchLine = 'responsiveVoice.speak("' +  data.jokes[nextJokeIndex].punchLine + '", ' + voiceTypeMale +
            '{onstart: startPunchLine("' + calculateJokeDuration(data.jokes[nextJokeIndex].punchLine) + '"),onend: rimShot});';

            document.querySelector(".joke").setAttribute("onclick", onClickJoke);
            document.querySelector(".repeatjoke").setAttribute("onclick", onClickRepeatJoke);
            document.querySelector(".punchLine").setAttribute("onclick", onClickPunchLine);
            document.querySelector(".joke").click();
        }

        if (message.data === CRICKETS) {
            lastDate = new Date();
            crickets();
        }

        if (message.data === APPLAUSE) {
            lastDate = new Date();
            applause();
        }

        if (message.data === NONE) {
            var shiftRobots = false;
            lastDate = new Date();
            var jokeBotText = "That button does nothing but if it makes you feel good please feel free to keep pushing it."
            var rosieText = "Ha ha ha good one JokeBot. humans"
            var onClickJoke = 'responsiveVoice.speak("' + jokeBotText + '", ' + voiceTypeMale +
            '{rate: 1, onstart: startJoke("' + calculateJokeDuration(jokeBotText) + '"), onend: triggerJokeRepeat});';
            var onClickRepeatJoke = 'responsiveVoice.speak("' +  rosieText + '", ' + voiceTypeFemale +
            '{onstart: startJokeRepeat("' + calculateJokeDuration(rosieText) + '","' + shiftRobots + '")});';

            document.querySelector(".joke").setAttribute("onclick", onClickJoke);
            document.querySelector(".repeatjoke").setAttribute("onclick", onClickRepeatJoke);
            document.querySelector(".joke").click();
        }

        if (message.data === GREETING) {
            var shiftRobots = false;
            lastDate = new Date();
            var jokeBotText = "I am joke bot 5000! Good morning Brandon.";
            var rosieText = "Good morning Brandon";
            var jokeBotResponse = "I already said good morning to Brandon." +
                "There is not need for you to say good morning to Brandon.";
            var rosieResponse = "If I want to say good morning to Brandon I will say good morning to Brandon";
            var jokeBotAngry = "I am joke bot 5000!";
            var finalWord = "yeah, yeah, yeah, well anyway it is very nice to see you Brandon!"
            var onClickJoke = 'responsiveVoice.speak("' + jokeBotText + '", ' + voiceTypeMale +
            '{rate: 1, onstart: startJoke("' + calculateJokeDuration(jokeBotText) + '"), onend: triggerJokeRepeat});';
            var onClickRepeatJoke = 'responsiveVoice.speak("' +  rosieText + '", ' + voiceTypeFemale +
            '{onstart: startJokeRepeat("' + calculateJokeDuration(rosieText) + '","' + shiftRobots + '"), onend: triggerGreetingResponse});';
            var onClickGreetingResponse = 'responsiveVoice.speak("' + jokeBotResponse + '", ' + voiceTypeMale +
            '{rate: 1, onstart: startJoke("' + calculateJokeDuration(jokeBotResponse) + '"), onend: triggerRosieResponse});';
            var onClickRosieResponse = 'responsiveVoice.speak("' +  rosieResponse + '", ' + voiceTypeFemale +
            '{onstart: startJokeRepeat("' + calculateJokeDuration(rosieResponse) + '","' + shiftRobots + '"), onend: triggerJokeBotAngry});';
            var onClickJokeBotAngry = 'responsiveVoice.speak("' + jokeBotAngry + '", ' + voiceTypeMale +
            '{rate: 1, onstart: startJoke("' + calculateJokeDuration(jokeBotAngry) + '"), onend: triggerFinalWord});';
            var onClickFinalWord = 'responsiveVoice.speak("' + finalWord + '", ' + voiceTypeFemale +
            '{rate: 1, onstart: startJokeRepeat("' + calculateJokeDuration(finalWord) + '")});';


            document.querySelector(".joke").setAttribute("onclick", onClickJoke);
            document.querySelector(".repeatjoke").setAttribute("onclick", onClickRepeatJoke);
            document.querySelector(".greetingResponse").setAttribute("onclick", onClickGreetingResponse);
            document.querySelector(".rosieResponse").setAttribute("onclick", onClickRosieResponse);
            document.querySelector(".jokeBotAngry").setAttribute("onclick", onClickJokeBotAngry);
            document.querySelector(".finalWord").setAttribute("onclick", onClickFinalWord);
            document.querySelector(".joke").click();
        }

        if (message.data === WEATHER && (lastWeatherDate.getTime() + 1000) < new Date()) {
            //console.log('in WEATHER');
            var shiftRobots = true;
            lastWeatherDate = new Date();
            lastDate = new Date();
            var weatherCB = function(weatherText) {
                weatherText = 'Oh JokeBot you know I can not control the weather ' + weatherText;
                var weatherIntro = 'Here is Rosie with the weather. I hope you are not going to ruin my golf game tomorrow'
                var onClickJoke = 'responsiveVoice.speak("' + weatherIntro + '", ' + voiceTypeMale +
                '{rate: 1, onstart: startJoke("' + calculateJokeDuration(weatherIntro) + '"), onend: triggerJokeRepeat});';
                var onClickRepeatJoke = 'responsiveVoice.speak("' +  weatherText + '", ' + voiceTypeFemale +
                '{onstart: startJokeRepeat("' + calculateJokeDuration(weatherText) + '","' + shiftRobots + '")});';

                // var onClickJoke = 'responsiveVoice.speak("' +  weatherText + '", ' + voiceTypeFemale +
                // '{onstart: startJokeRepeat("' + calculateJokeDuration(weatherText) + '")});';
                document.querySelector(".joke").setAttribute("onclick", onClickJoke);
                document.querySelector(".repeatjoke").setAttribute("onclick", onClickRepeatJoke);
                document.querySelector(".joke").click();
            }

            getWeather(weatherCB);
        }

        //listener.unsubscribe();
        if (message.data === INTRO && (lastDate.getTime() + 60000) < new Date() || message.data === INTRO && isKeyEvent) {
            lastDate = new Date();
            document.querySelector(".intro").click();
            var duration = 22;
            dispatch.speak({
                "duration": duration
            });
        }

        if (message.data === MOVE_LEFT) {
            console.log("move left");
        }

        if (message.data === MOVE_RIGHT) {
            console.log("move right");
        }
}

function calculateJokeDuration(text) {
    var result = Math.floor(text.length/2.5);
    //make sure it is an even number
    var rem = result % 2;
    if(rem > 0) {
        result = result + 1;
    }
    return result;
}
