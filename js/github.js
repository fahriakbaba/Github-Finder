//to create instances of UI
const ui = new UI();

//class Github
class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
        this.name = "";
    }

    updatedName(name) {
        this.name = name;
        this.getDataFromAPI()
    }

    async getDataFromAPI() {
        const res = await fetch(this.url + this.name);
        const data = await res.json();
        if (res.ok === true) {
            ui.showProfile(data);
        } else {
            console.log({message: data.message, url: data.documentation_url});
        }
    
        const resRepos = await fetch(this.url + this.name + "/repos");
        const dataRepos = await resRepos.json(); 
        if (resRepos.ok === true) {       
            ui.showRepos(dataRepos);
        } else {
            console.log({message: dataRepos.message, url: dataRepos.documentation_url});
        }
    }
}