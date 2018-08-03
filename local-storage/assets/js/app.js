// Variables
const tweetList = document.getElementById("tweet-list");

// Events
eventListeners();

function eventListeners() {
  // Form submission
  document.querySelector("#form").addEventListener("submit", newTweet);

  // Remove tweet from the list
  tweetList.addEventListener("click", removeTweet);

  // DOM Loaded
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
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

  addTweetToLocalStorage(textareaValue);
}

// Remove Tweets From List
function removeTweet(event) {
  if (event.target.classList.contains("remove-tweet")) {
    event.target.parentElement.remove();
  }
}

// Add To LocalStorage
function addTweetToLocalStorage(textareaValue) {
  let tweets = getFromLs();

  // Add tweet to empty Array
  tweets.push(textareaValue);

  // Convert array into string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Get From LocalStorage
function getFromLs() {
  let tweets;
  const tweetsLS = localStorage.getItem("tweets");
  if (tweetsLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }
  return tweets;
}

// Print localStorage Items
function localStorageOnLoad() {
  let tweets = getFromLs();
  tweets.forEach(tweet => {
    // Create remove btn
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";

    // Create <li></li> elements
    const li = document.createElement("li");
    li.textContent = tweet;

    // Add remove btn to each <li>
    li.appendChild(removeBtn);

    // Add to the list
    tweetList.appendChild(li);
  });
}
