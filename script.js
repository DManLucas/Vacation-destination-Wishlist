let detailsForm = document.querySelector("#destination_details_form");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  let destName = e.target.elements["name"].value;
  let destLocation = e.target.elements["location"].value;
  let destPhoto = e.target.elements["photo"].value;
  let destDescription = e.target.elements["description"].value;
}
