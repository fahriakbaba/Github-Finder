//to get elements
const loading = document.querySelector(".loading");
const errorMessage = document.querySelector(".error");

//to create instances of UI
const ui = new UI();

//class Github
class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
        this.name = "";
    }

    //to update user name
    updatedName(name) {
        this.name = name;
        this.getDataFromAPI()
    }

    //to fetch data from URL
    async getDataFromAPI() {
        const res = await fetch(this.url + this.name);
        const data = await res.json();
        const resRepos = await fetch(this.url + this.name + "/repos");
        const dataRepos = await resRepos.json(); 

        if (res.ok === true) {
            ui.showProfile(data);
        } else {
            console.log({message: data.message, url: data.documentation_url});
            errorMessage.innerText = data.message;
            errorMessage.style.display = "block";
        }
        
        if (resRepos.ok === true) {       
            ui.showRepos(dataRepos);
        } else {
            console.log({message: dataRepos.message, url: dataRepos.documentation_url});
        }

        //to finish loading effect
        loading.style.display = "none";
    }
}