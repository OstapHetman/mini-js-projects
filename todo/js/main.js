const input = document.getElementById("taskInput");
const form = document.querySelector("#todo-form");
const btn = document.querySelector("#add-btn");
const allTasks = document.getElementById("list-group");

// Events
document.addEventListener("DOMContentLoaded", fetchFromJson);
form.addEventListener("submit", formSubmitted);

// Functions
function formSubmitted(e) {
  e.preventDefault();
  let data = {
    title: input.value
  };
  let options = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch("http://localhost:3000/todos", options)
    .then(response => {
      response.json;
      console.log("Done...");
    })
    .catch(err => {
      console.log(`[Err ${err}]`);
    });
}

function fetchFromJson() {
  let output = "";
  fetch("http://localhost:3000/todos")
    .then(response => response.json())
    .then(tasks => {
      tasks.forEach(task => {
        // console.log(task.title);
        output += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${
          task.id
        }">
        ${task.title}
        <i class="far fa-trash-alt text-danger" style="cursor: pointer"></i>
        </li>
        `;
      });
      allTasks.innerHTML = output;
    })
    .catch(err => console.log(err));
}
