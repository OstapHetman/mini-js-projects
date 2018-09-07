const filterInput = document.querySelector("#filterInput");

filterInput.addEventListener("keyup", filterNames);

function filterNames(e) {
  const inputValue = e.target.value.toUpperCase();
  let ul = document.querySelector("#contacts");
  let li = ul.querySelectorAll("li.list-group-item:not(.active)");

  li.forEach(el => {
    let span = el.getElementsByTagName("span")[0];
    console.log(span);
    if (span.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });
}
