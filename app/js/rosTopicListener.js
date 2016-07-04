const INTRO = 'INTRO';
const TELL_JOKE = 'TELL_JOKE';
// https://bl.ocks.org/mbostock/5872848
var dispatch = d3.dispatch("speak");

var myStartCallback = function myStartCallback() {
    console.log('in my start callback');
}

var myEndCallback = function() {
    console.log('in my end callback');
    document.getElementsByClassName("repeatQuestion")[0].click();
}

var myEndCallback2 = function() {
    console.log('in my end callback2');
    document.getElementsByClassName("punchLine")[0].click();
}

var myEndCallback3 = function() {
    console.log('in my end callback3');
    document.getElementById("rimShot").play();
    setTimeout(function() {
        document.getElementById("applause").play();
    }, 2000);
    setTimeout(function() {
        document.getElementById("crickets").play();
    }, 7000);
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
    if (message.data === TELL_JOKE) {
        document.getElementsByClassName("jokeOne")[0].click();
        var duration = 14;
        dispatch.speak({
            "duration": duration
        });
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
