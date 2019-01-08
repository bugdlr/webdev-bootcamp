let todos = [];

window.setTimeout(function() {
// new = add a todo, list = show all todos, quit = quit app

let input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");


function listTodos() {
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
}

function addTodo() {
  let item = prompt("Enter a new to do?");
  todos.push(item);
  console.log("Added Todo");
}

function deleteTodo(){
  let index = Number(prompt("What is the index of the todo you want to remove?"));
  todos.splice(index, 1);
  console.log("Deleted Todo");
}


}, 500);
