const input = document.getElementById("taskInput");
const form = document.querySelector("#todo-form");
const btn = document.querySelector("#add-btn");
const allTasks = document.getElementById("list-group");

// Events
document.addEventListener("DOMContentLoaded", fetchFromJson);
form.addEventListener("submit", formSubmitted);
allTasks.addEventListener("click", removeItem);

// Functions
// Post
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

// Get
function fetchFromJson() {
  let output = "";
  fetch("http://localhost:3000/todos")
    .then(response => response.json())
    .then(tasks => {
      if (tasks.length == 0) {
        output = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-danger">Nothing to-do</li>
        `;
      } else {
        tasks.forEach(task => {
          output += `
              <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${
                task.id
              }">
              ${task.title}
              <i class="far fa-trash-alt text-danger" style="cursor: pointer"></i>
              </li>
              `;
        });
      }
      allTasks.innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Delete
function removeItem(e) {
  e.preventDefault();
  let removeBtn = e.target.classList.contains("far");
  let data = {
    title: input.value
  };
  if (removeBtn) {
    let id = e.target.parentElement.getAttribute("data-id");
    e.target.parentElement.remove();
    let options = {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    };
    fetch(`http://localhost:3000/todos/${id}`, options)
      .then(response => {
        response.json;
        console.log("Done...");
      })
      .catch(err => {
        console.log(`[Err ${err}]`);
      });
    console.log("YES..");
  }
}
