// Variables
const courses = document.querySelector("#courses-list");
const shoppingCartContent = document.querySelector("#cart-content tbody");

// Events
loadEventListeners();
function loadEventListeners() {
  // When a new courses added
  courses.addEventListener("click", buyCourse);
}

// Functions
function buyCourse(e) {
  e.preventDefault();
  // Use delegation to find each course
  if (e.target.classList.contains("add-to-cart")) {
    // Read the course value
    const course = e.target.parentElement.parentElement;

    // Read the values
    getCourseInfo(course);
  }
}

// Read the HTML information of the selected course
function getCourseInfo(course) {
  // Create an Object with Course Data
  const courseInfo = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".price span").textContent,
    id: course.querySelector("a").getAttribute("data-id")
  };

  // Insert into Shopping Cart
  addToCart(courseInfo);
}

// Display the selected course into shopping cart
function addToCart(course) {
  // create <tr>
  const row = document.createElement("tr");

  // Build the template
  row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width=100>
            </td>
            <td>
                ${course.title}
            </td>
            <td>
                ${course.price}
            </td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
    `;
  shoppingCartContent.appendChild(row);
}
