$(function(){
  $('#submit').on('click', function(){
    var time = $('#displayedTime').text();
    $('#newScores').text(time);
    stopButton.click();
    displayedTime.textContent = "00:00:00";
  })
})

var seconds = 0;
var minutes = 0;
var hours = 0;
var time;
var displayedTime = document.getElementById('displayedTime');
var start = document.getElementById('startButton');
var stop = document.getElementById('stopButton');
var clear = document.getElementById('clearButton');

function submit (){
  var data = {time: $('#newScores').text()};
  $.ajax({
    type: 'POST',
    url: '/time/add',
    data: data
  });
}

function count() {
    seconds++;
    if (seconds === 59) {
        seconds = 0;
        minutes++;
        if (minutes === 59) {
            minutes = 0;
            hours++;
        }
    }

    displayedTime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    initiate();
}

function initiate() {
    time = setTimeout(count, 1000);
}

startButton.onclick = initiate;

stopButton.onclick = function() {
    clearTimeout(time);
};

clearButton.onclick = function() {
    clearTimeout(time);
    displayedTime.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}
