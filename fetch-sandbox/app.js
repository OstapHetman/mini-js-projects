const getTextBtn = document.querySelector("#getText");
const getUsersBtn = document.querySelector("#getUsers");
const getPostsBtn = document.querySelector("#getPosts");
const outputDiv = document.getElementById("output");
const form = document.getElementById("addPost");

getTextBtn.addEventListener("click", getText);
getUsersBtn.addEventListener("click", getUers);
getPostsBtn.addEventListener("click", getPosts);
getPostsBtn.addEventListener("click", getPosts);
form.addEventListener("submit", addPost);

function getText() {
  fetch("sample.txt")
    .then(response => response.text())
    .then(data => (outputDiv.innerHTML = data))
    .catch(err => console.log(err));
}

function getUers() {
  fetch("users.json")
    .then(response => response.json())
    .then(users => {
      let output = '<h2 class="mb-3"> Users </h2>';
      users.forEach(user => {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id} </li>
            <li class="list-group-item">Name: ${user.name} </li>
            <li class="list-group-item">Email: ${user.email} </li>
          </ul>
          `;
      });
      outputDiv.innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      let output = '<h2 class="mb-4"> Posts </h2>';
      posts.forEach(post => {
        output += `
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
          `;
      });
      outputDiv.innerHTML = output;
    })
    .catch(err => console.log(err));
}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ title: title, body: body })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
