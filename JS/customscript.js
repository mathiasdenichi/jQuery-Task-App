$(".the-input").keypress(function(event){
    $(this).addClass("input-large");
        if(event.which === 13) {
            var addTodo = $(this).val();
            $(this).removeClass("input-large");
            $(this).val("");
            $('ul').append("<li><span class='check-box'><i class='fas fa-check text'></i></span><span class='text items'>" + addTodo + "</span><span class='delete text'><i class='fas fa-trash'></i></span></li>")
        }
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("check");
    $(".completed").fadeIn(500, function(){
        $(this).removeClass("no-display"); 
    });
    $(".completed").fadeOut(500, function(){
        $(this).addClass("no-display"); 
    });
});


$("ul").on("click", ".delete", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});