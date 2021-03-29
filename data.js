// $('input').keypress(function(event){
//     if(event.which === 13){
//         var toDoText = $(this).val();
//         $(this).val("");
//         $('ul').append('<li>' + toDoText + '<span><i class= "fa fa-trash"</i></span>')
//     }
// });


// // cara menghapus

// $('ul').on('click', "span", function(event){
//     $(this).parent().fadeOut(500, function(){
//        $(this).remove(); 
//     });
//     event.stopPropagation();
// })

//untuk menambah
$('input').keypress(function(event){
    if(event.which === 13){
        var addTodotext = $(this).val();
        $(this).val("");
        $('ul').append('<li>' + addTodotext + '<span><i class="fa fa-trash"</i></span>')
    }
});

//untuk menghapus
$('ul').on('click', "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })

    event.stopPropagation();
})
