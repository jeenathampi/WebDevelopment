    var numSquares = 6;
    var colors = generateRandomColors(numSquares);
    var squares = document.querySelectorAll(".square");
    var PickedColor = colorPicker();
    var colorDisplay = document.getElementById("colorDisplay");
    var message = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var reload = document.querySelector("#reload");
    var mode = document.querySelectorAll(".mode");

    colorDisplay.textContent = PickedColor;

    for(var i=0;i<squares.length;i++){
         squares[i].style.backgroundColor = colors[i];
    
         squares[i].addEventListener("click", function(){
             if(this.style.backgroundColor === PickedColor){
                for(var i=0;i<colors.length;i++){
                    squares[i].style.backgroundColor = PickedColor;
                }
                h1.style.backgroundColor = PickedColor;
                colorDisplay.style.backgroundColor = PickedColor;
                message.textContent = "Correct!!!"
                reload.textContent = "Play Again?"
             }
             else{
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again"
             }
            
        });
    }

    for(var i=0;i<mode.length;i++){
        mode[i].addEventListener("click",function(){
            for(var j=0;j<mode.length;j++){
                mode[j].classList.remove("selected");
            }
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
                reset();
            }
            else{
                numSquares = 6;
                location.reload();
            }

        });
    }

    function reset(){
        h1.style.backgroundColor = "#03a5fc";
        colorDisplay.style.backgroundColor = "#03a5fc";
        colors = generateRandomColors(numSquares);
        PickedColor = colorPicker();
        colorDisplay.textContent = PickedColor;
        message.textContent = "";
        reload.textContent = "New Colors";
        for(var i=0;i<squares.length;i++){
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
            }
            else{
                squares[i].style.display = "none";
            }
        }
    }

reload.addEventListener("click",function(){
    if(numSquares === 6){
      location.reload();
    }
    else{
        reset();      
    }
    
});

function colorPicker(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++){
        var colorRed = Math.floor(Math.random()*256);
        var colorGreen = Math.floor(Math.random()*256);
        var colorBlue = Math.floor(Math.random()*256);
        arr[i]="rgb("+colorRed+", "+colorGreen+", "+colorBlue+")";
    }
    return arr;
}