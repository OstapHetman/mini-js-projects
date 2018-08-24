const input = document.getElementById("taskInput");
const form = document.querySelector("#todo-form");
const btn = document.querySelector("#add-btn");
const allTasks = document.getElementById("list-group");

// Events
document.addEventListener("DOMContentLoaded", fetchFromJson);
// form.addEventListener("submit", formSubmitted);

// Functions
// function formSubmitted(e) {
//   e.preventDefault();

//   let inputData = input.value;
//   fetch("todos.json", {
//     method: "POST",
//     body: JSON.stringify({ task: inputData })
//   })
//     .then(resp => {
//       console.log("Done...");
//     })
//     .catch(err => {
//       console.log(`[Err ${err}]`);
//     });
// }

function fetchFromJson() {
  let output = "";
  fetch("todos.json")
    .then(response => response.json())
    .then(tasks => {
      let data = tasks.todos;
      data.forEach(task => {
        // console.log(task.title);
        output += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${task.title}
        <i class="far fa-trash-alt text-danger"></i>
        </li>
        `;
      });
      allTasks.innerHTML = output;
    })
    .catch(err => console.log(err));
}
