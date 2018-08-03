// Variables
const tweetList = document.getElementById("tweet-list");

// Events
eventListeners();

function eventListeners() {
  // Form submission
  document.querySelector("#form").addEventListener("submit", newTweet);

  // Remove tweet from the list
  tweetList.addEventListener("click", removeTweet);
}

// Functions
function newTweet(event) {
  event.preventDefault();

  // Get a textarea
  const textareaValue = document.querySelector("#tweet").value;

  // Create remove btn
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  // Create <li></li> elements
  const li = document.createElement("li");
  li.textContent = textareaValue;

  // Add remove btn to each <li>
  li.appendChild(removeBtn);

  // Add to the list
  tweetList.appendChild(li);
}

// Remove Tweets From List
function removeTweet(event) {
  if (event.target.classList.contains("remove-tweet")) {
    event.target.parentElement.remove();
  }
}
