var player1 = document.getElementById("p1");
var player2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var player1Score = document.querySelector("#score1");
var player2Score = document.querySelector("#score2");
var playNumber = document.querySelector("input");
var winScore = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

player1.addEventListener("click",function(){
      if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            player1Score.classList.add("green");
        }
        player1Score.textContent = p1Score;
        

      }

});
player2.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            player2Score.classList.add("green");
        }
        player2Score.textContent = p2Score;

      }
});
reset.addEventListener("click",function(){
     reset1();
});
function reset1(){
    player1Score.textContent = 0;
     player2Score.textContent = 0;
     player1Score.classList.remove("green");
     player2Score.classList.remove("green");
     gameOver = false;
     p1Score = 0;
     p2Score = 0;
}
playNumber.addEventListener("change",function(){
    winScore.textContent = playNumber.value;
    winningScore = Number(playNumber.value);
    reset1();
});