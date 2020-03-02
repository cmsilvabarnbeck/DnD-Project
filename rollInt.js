<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <style media="screen">
    .q2h1{
      margin: auto;
      background-color: black;
      text-align: center;
      color: green;
    }
    .lastFight{
      margin: auto;
      text-align: center;
      color: red;
      font-size: 36px;
    }
    </style>
    <script>
    var playerRoll;


    function jsFunction() {
      window.location.replace("gametime.html");

    }

    function checkAnswer() {
      if(document.getElementById("q1").value.toUpperCase() === "GLOVES") {
        alert ("Congratulations, but that was just a lucky guess!");
          window.location.replace("question2.html");
        return(false);
        }
      else {
        alert ("You have failed. Your punishment will be to make a Facebook.  You are a Zuckerburg Zombie now! HAHAHA!")
        window.location.replace("http://www.facebook.com");
        return(false);
      }

    }

    function rollDice() {
      var playerRoll = Math.floor(Math.random() * 20)+1;
      alert("You rolled "+playerRoll);
      window.location.replace("bossbattle.html");
      return playerRoll;
    }

    </script>
    <meta charset="utf-8">
    <title>Question 2</title>
  </head>
  <div class="q2h1">

  <h1 class="text-success">Roll your initiative!</h1>


  <button type="Roll" name="button" onclick="rollDice()">Roll Initiative</button>
  <body>
  <br>
  <br>
  <p><img src="https://media.giphy.com/media/3oz8xVlyQAXwnD9C2A/giphy.gif" alt=""></p>
  </div>
  </body>
</html>
