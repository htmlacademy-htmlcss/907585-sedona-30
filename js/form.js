const searchButton = document.querySelector(".search-button");
const searchForm = document.querySelector(".search-form");
const arrivalDate = searchForm.querySelector("#arrival_date");
const depatureDate = searchForm.querySelector("#depature_date");
const adult = searchForm.querySelector("#adult");
const children = searchForm.querySelector("#children");

let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";

searchForm.classList.add("search-form-hidden");

try {
  storageAdult = localStorage.getItem("adult");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

if (storageAdult) {
  adult.value = storageAdult;
}

if(storageChildren) {
  children.value = storageChildren;
}

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (searchForm.classList.contains("search-form-hidden")) {
    searchForm.classList.remove("search-form-hidden");
    arrivalDate.focus();
  } else {
    searchForm.classList.add("search-form-hidden");
    searchForm.classList.remove("search-form-error");
  }
})

searchForm.addEventListener("submit", function(event) {
  if (!arrivalDate.value || !depatureDate.value || !adult.value) {
    event.preventDefault();
    searchForm.classList.remove("search-form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
})

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!searchForm.classList.contains("search-form-hidden")) {
      event.preventDefault();
      searchForm.classList.add("search-form-hidden");
      searchForm.classList.remove("search-form-error");
    }
  }
})
