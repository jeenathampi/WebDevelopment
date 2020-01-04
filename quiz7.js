 var button = document.querySelector("button");
// var body = document.querySelector("body");
// var isColorWhite = true;
// button.addEventListener("click",function(){
//     if(isColorWhite){
//         body.style.background = "purple";
//     }
//     else{
//         body.style.background = "white";
//     }
//     isColorWhite = !isColorWhite;
// });

button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
})