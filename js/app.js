// to get elements
const search = document.querySelector("#search-input");
const form = document.getElementById("form");

//to create instances of class
const github = new Github();

//to submit form
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    //to get data from URL
    github.updatedName(search.value);
});



 