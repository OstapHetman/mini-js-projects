// Validate Zipcode
export function isValidZip(zip) {
  return /^\d{5}(-d\{4})?$/.test(zip);
}

// Display Alert Messag
export function showAlert(msg, className) {
  const div = document.createElement("div");

  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(msg));

  const container = document.querySelector(".container");
  const form = document.querySelector("#pet-form");

  // Insert Alert div before form inside container
  container.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
