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
        console.log(data);
    }
}