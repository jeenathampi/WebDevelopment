// var FName = prompt("Please enter first name");
// var LName = prompt("Please enter last name");
// var age = prompt("Whats your age ?");
// alert("Hello there "+FName+" "+LName);
// alert("your age is "+age);
// console.log("Hello there from console "+FName+" "+LName);
// console.log("your age is "+age);


// var num = 5;
// while(num <= 50){
//     if((num % 5 === 0)&&(num % 3 === 0)){
//         console.log("Number is: "+num);
//     }
//     num++;
// }

// var answer = prompt("Are we there yet");
// while(answer != "yes" && answer != "yeah"){
//     var answer = prompt("Are we there yet");
// }
// alert("yay!! We made it.")

// console.log("Numbers b/w -10 and 19");
// for(var i = -10;i<=19;i++){
//     console.log(i);
// }

// console.log("Numbers b/w 10 and 40");
// for(var i = 10;i<=40;i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// console.log("Numbers b/w 300 and 333");
// for(var i = 300;i<=333;i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

// console.log("Numbers b/w 5 and 50");
// for(var i = 5;i<=50;i++){
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }


function isEven(x){
    if(x % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
isEven(5);

function factorial(x){
    if(x>0){
        for(var i=x-1;i>0;i--){
            x=x*i;
        }
        return x;
    }
    else{
        return 1;
    }
    
}
factorial(5);
factorial(2);
factorial(10);
factorial(0);


function kebabToSnake(str){
    var newstr = str.replace(/-/g , "_")
    return newstr;
}
kebabToSnake("hello-");


