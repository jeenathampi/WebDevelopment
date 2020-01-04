$("input").on("keypress",function(event){
    if(event.which === 13){
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+$(this).val()+"</li>");
        $(this).val("");
    }
});

$("ul").on("click","li",function(){
    $(this).toggleClass("done");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".fa-user-edit").on("click",function(){
     $("input[type='text']").fadeToggle();
});