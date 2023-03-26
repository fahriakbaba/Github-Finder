// to get elements
const search = document.querySelector("#search-input");
const form = document.getElementById("form");

//to create instances of class
const github = new Github();

//to submit form
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    //to clean error message
    document.querySelector(".error").style.display = "none";

    //to start loading effect
    document.querySelector(".loading").style.display = "block";

    //to clean repos and profile section content
    ui.profile.innerHTML ="";
    ui.repos.innerHTML = "";

    //to get data from URL
    github.updatedName(search.value);

    //to clean user name
    search.value = "";
});



 