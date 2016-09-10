const INTRO = 'INTRO';
const TELL_JOKE = 'TELL_JOKE';
const WEATHER = 'WEATHER';
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
    document.getElementsByClassName("repeatJoke")[0].click();
}

var startJokeRepeat = function(duration) {
    dispatch.speakRepeat({
        "duration": duration
    });
}

var triggerPunchLine = function() {
    document.getElementsByClassName("punchLine")[0].click();
}

var startPunchLine = function(duration) {
    dispatch.speak({
        "duration": duration
    });
}

var rimShot = function() {
    dispatch.drummer({
        "test": "this is a test"
    });
    document.getElementById("rimShot").play();
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

listener.subscribe(function(message) {
    var voiceTypeMale = '"UK English Male",';
    var voiceTypeFemale = '"UK English Female",';
    if (message.data === TELL_JOKE && (lastJokeDate.getTime() + 1000) < new Date()) {
        //console.log('in TELL_JOKE');
        lastJokeDate = new Date();
        var nextJokeIndex = Math.floor((Math.random() * data.jokes.length));
        var onClickJoke = 'responsiveVoice.speak("' + data.jokes[nextJokeIndex].joke + '", ' + voiceTypeMale +
        '{rate: 1, onstart: startJoke("' + calculateJokeDuration(data.jokes[nextJokeIndex].joke) + '"), onend: triggerJokeRepeat});';
        var onClickRepeatJoke = 'responsiveVoice.speak("' +  data.jokes[nextJokeIndex].repeatJoke + '", ' + voiceTypeFemale +
        '{onstart: startJokeRepeat("' + calculateJokeDuration(data.jokes[nextJokeIndex].repeatJoke) + '"), onend: triggerPunchLine});';
        var onClickPunchLine = 'responsiveVoice.speak("' +  data.jokes[nextJokeIndex].punchLine + '", ' + voiceTypeMale +
        '{onstart: startPunchLine("' + calculateJokeDuration(data.jokes[nextJokeIndex].punchLine) + '"),onend: rimShot});';

        document.getElementsByClassName("joke")[0].setAttribute("onclick", onClickJoke);
        document.getElementsByClassName("repeatjoke")[0].setAttribute("onclick", onClickRepeatJoke);
        document.getElementsByClassName("punchLine")[0].setAttribute("onclick", onClickPunchLine);
        document.getElementsByClassName("joke")[0].click();
    }

    if (message.data === WEATHER && (lastWeatherDate.getTime() + 1000) < new Date()) {
        //console.log('in WEATHER');
        lastWeatherDate = new Date();
        var weatherText = '';
        var weatherCB = function(text) {
            weatherText = text;
            var onClickJoke = 'responsiveVoice.speak("' +  weatherText + '", ' + voiceTypeFemale +
            '{onstart: startJokeRepeat("' + calculateJokeDuration(weatherText) + '")});';
            document.getElementsByClassName("joke")[0].setAttribute("onclick", onClickJoke);
            document.getElementsByClassName("joke")[0].click();
        }

        getWeather(weatherCB);
    }

    //listener.unsubscribe();
    if (message.data === INTRO && (lastDate.getTime() + 10000) < new Date()) {
        lastDate = new Date();
        document.getElementsByClassName("intro")[0].click();
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

});

function calculateJokeDuration(text) {
    var result = Math.floor(text.length/2.5);
    //make sure it is an even number
    var rem = result % 2;
    if(rem > 0) {
        result = result + 1;
    }
    return result;
}
