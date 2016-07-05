const INTRO = 'INTRO';
const TELL_JOKE = 'TELL_JOKE';
// https://bl.ocks.org/mbostock/5872848
var dispatch = d3.dispatch("speak");

var startJoke = function() {
    var duration = 10;
    dispatch.speak({
        "duration": duration
    });
}

var startRepeatJoke = function() {
    document.getElementsByClassName("repeatJoke")[0].click();
}

var startPunchLine = function() {
    document.getElementsByClassName("punchLine")[0].click();
    var duration = 8;
    dispatch.speak({
        "duration": duration
    });
}

var rimShot = function() {
    document.getElementById("rimShot").play();
    // setTimeout(function() {
    //     document.getElementById("applause").play();
    // }, 2000);
    // setTimeout(function() {
    //     document.getElementById("crickets").play();
    // }, 7000);
}

// Connecting to ROS
// -----------------

var ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function() {
    console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});


// Subscribing to a Topic
// ----------------------

var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/chatter',
    messageType: 'std_msgs/String'
});

var lastDate = new Date((new Date()).getTime() - 10000);

listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
    var voiceTypeMale = '"UK English Male",';
    var voiceTypeFemale = '"UK English Female",';
    if (message.data === TELL_JOKE) {
        var nextJokeIndex = Math.floor((Math.random() * data.jokes.length));
        var onClickJoke = 'responsiveVoice.speak("' + data.jokes[nextJokeIndex].joke + '", ' + voiceTypeMale +
        '{rate: 1, onstart: startJoke, onend: startRepeatJoke});';
        var onClickRepeatJoke = 'responsiveVoice.speak("' +  data.jokes[nextJokeIndex].repeatJoke + '", ' + voiceTypeFemale +
        '{onend: startPunchLine});';
        var onClickPunchLine = 'responsiveVoice.speak("' +  data.jokes[nextJokeIndex].punchLine + '", ' + voiceTypeMale +
        '{onend: rimShot});';

        document.getElementsByClassName("joke")[0].setAttribute("onclick", onClickJoke);
        document.getElementsByClassName("repeatjoke")[0].setAttribute("onclick", onClickRepeatJoke);
        document.getElementsByClassName("punchLine")[0].setAttribute("onclick", onClickPunchLine);
        document.getElementsByClassName("joke")[0].click();
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

});
