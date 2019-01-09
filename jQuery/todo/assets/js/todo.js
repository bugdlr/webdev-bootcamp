// check off specific todos by clicking
$("ul").on('click', "li", function(){
  $(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on('click', "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
})

// create a new todo
$("input[type='text']").keypress(function(e) {
  if(e.which === 13) {
    // get new todo text from input
    let todoText = $(this).val();
    // create a new li and add to ul
    $("ul").append("<li>" + todoText + "<span><i class='fas fa-trash-alt'></i></span></li>");
    // clear the input
    $(this).val("");
  };
})

// toggle input field
$("#plus").click(function(){
  $("input[type='text']").fadeToggle();
})
