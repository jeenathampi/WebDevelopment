var arr = [1,2,3,4,5,6];
function printReverse([]){
    for(var i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
}
printReverse(arr);

var arr = [1,1,1,1];
function isUniform([]){
    var el = arr[0];
    for(var i=1;i<arr.length;i++){
        if(el !== arr[i]){
            return false;
        }
    }
    return true;
}
isUniform(arr);

var arr = [10,3,10,4];
function sumArray([]){
    var sum=0;
    arr.forEach(function(el){
        sum+=el;
    });
    return sum;
}
sumArray(arr);

var arr = [1,2,3];
function max([]){
    var max=arr[0];
    arr.forEach(function(el){
        if(max<el){
            max=el;
        }
    });
    return max;
}
max(arr);

var movie = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];
movie.forEach(function(film){
    if(film.hasWatched){
        console.log("You have watched "+"\""+film.title+"\""+" - "+film.rating+" stars");
    }
    else{
        console.log("You have not seen "+"\""+film.title+"\""+" - "+film.rating+" stars");
    }
});