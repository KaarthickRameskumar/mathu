window.onload = function(){
    startCountdown();
    localStorage.setItem("number", 0);
    localStorage.setItem("score", 0);

    var txt = document.getElementById("text");
    var btn = document.getElementById("submit");

    text.value = "";


    txt.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        btn.click();
      }
    });
}

function startCountdown(){
  setTimeout(function(){document.getElementById("countdown").innerHTML = "3"}, 1000);
  setTimeout(function(){document.getElementById("countdown").innerHTML = "2"}, 2000);
  setTimeout(function(){document.getElementById("countdown").innerHTML = "1"}, 3000);
  setTimeout(function(){document.getElementById("countdown").innerHTML = "Start!"}, 4000);
  setTimeout(function(){document.getElementById("countdown").style.visibility = "hidden"}, 5000);
  setTimeout(function(){
    var dataset = generateQuestion();

    localStorage.setItem("answer", dataset[1]);
    document.getElementById("question").innerHTML = dataset[0];
  }, 5000);
  startTimer();
}

function generateQuestion(){
  var a = Math.floor(Math.random() * 10);
  var b = Math.floor(Math.random() * 10);

  var question = a + " × " + b;
  var answer = a * b;

  return [question, answer];
}

var score = 0;
var number = 0;

function check(){
  number++;
  localStorage.setItem("number", number);
  if(localStorage.getItem("answer") == document.getElementById("text").value){
    score++;
    localStorage.setItem("score", score);
    console.log("correct!");
  } else {
    console.log("wrong!");
  }

  if(number == 8){
    console.log("Game over! " + score + " questions answered correctly out of " + number);
    window.location.href = "finish.html?" + score + "?" + seconds;
  } else {
    var dataset = generateQuestion();
    localStorage.setItem("answer", dataset[1]);
    document.getElementById("question").innerHTML = dataset[0];

    document.getElementById("text").value = "";
    document.getElementById("text").focus();
  }
}

var seconds = 0;

function startTimer(){
  setTimeout(
    function(){
      setInterval(function() {
        document.getElementById("timer").style.opacity = "1";
        document.getElementById("text").style.opacity = "1";
        document.getElementById("submit").style.opacity = "1";
        document.getElementById("timer").innerHTML = seconds++;
      }, 1000);
      generateQuestion();
    },
  4000)
}