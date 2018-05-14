var clock;

$(document).ready(function() {

    // Instantiate a counter
    clock = new FlipClock($('.clock'), 88, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true,
        interval: 10000,
        animationRate: 10000
    });

});