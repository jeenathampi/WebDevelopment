window.setTimeout(function(){
    var todos = [];
    var input = prompt("what would you like to do");
    while(input !== "quit"){
        if(input === "new"){
            addTodos();
        }
        else if(input === "list"){
            listTodos();
        }
        else if(input === "delete"){
            deleteTodos();
        }
        input = prompt("what would you like to do next");
    }
    console.log("Ok, you quit")

    function addTodos(){
        var newTodos = prompt("add a new todo");
        todos.push(newTodos);
    }

    function listTodos(){
        console.log("************");
        todos.forEach(function(todo,i){
            console.log((i+1)+": "+todo);
        })
        console.log("************");
    }

    function deleteTodos(){
        var index = prompt("Enter the index of todo to delete");
        todos.splice(index-1,1);
    }
}, 500);

// var gCount=0;
// var oCount=0;
// var bCount=0;
// for(var i=0;i<color.length;i++){
//     if(color[i]==="Green"){
//         gCount++;
//     }
//     else if(color[i]==="Blue"){
//         bCount++;
//     }
//     else if(color[i]==="Orange"){
//         oCount++;
//     }
// }
// console.log("Green :"+gCount);
// console.log("Blue :"+bCount);
// console.log("Oange :"+oCount);


// var gCount=0;
// var oCount=0;
// var bCount=0;
// color.forEach(function(colors){
//     if(colors ==="Green"){
//         gCount++;
//     }
//     else if(colors ==="Blue"){
//         bCount++;
//     }
//     else if(colors ==="Orange"){
//         oCount++;
//     }
// });
// console.log("Green :"+gCount);
// console.log("Blue :"+bCount);
// console.log("Oange :"+oCount);
