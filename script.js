var time = new Date();
var timerID;


function getTime() {
  var str = document.getElementById('input').value;
  var newStr = str.split(':');
  switch (newStr.length) {
    case 1:
      time.setHours(0, 0, newStr[0]);
      break;
    case 2:
      time.setHours(0, newStr[0], newStr[1]);
      break;
    case 3:
      time.setHours(newStr[0], newStr[1], newStr[2]);
      break;
  }

  printTime();

  if (!timerID) {
    timerID = setInterval(printTime, 1000);
  }
};

function printTime() {

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerID);
    timerID = undefined;
  }
  if (hours < 10) {
    hours = '0' + hours;
  };
  if (minutes < 10) {
    minutes = '0' + minutes;
  };
  if (seconds < 10) {
    seconds = '0' + seconds;
  };
  document.getElementById('countdown').innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
  time = new Date(time.getTime() - 1000);

}
