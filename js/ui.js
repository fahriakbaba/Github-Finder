class UI {
    constructor () {
        this.profile = document.querySelector("#show-profile");
        this.repos = document.querySelector("#show-repos");
    }
     

    showProfile(profile) {
        console.log("profile: ", profile);
        this.profile.innerHTML = `
        <div class="col-4" style="width: 15rem">
          <img
            src=${profile.avatar_url}
            class="img-fluid rounded mb-1"
            alt="..."
          />
          <div class="card-body">
            <a href="#" class="btn btn-sm btn-primary w-100">View Profile</a>
          </div>
        </div>
        <div class="left col-8 mt-4">
          <div class="badge-group">
            <span class="badge bg-primary">Stars: 0</span>
            <span class="badge bg-secondary">Watches: 0</span>
            <span class="badge bg-success">Forks: 0</span>
          </div>
          <ul class="list-group mt-2 w-100">
            <li class="list-group-item list-group-item-action">Company: ${profile.company}</li>
            <li class="list-group-item list-group-item-action">Website/Blog: </li>
            <li class="list-group-item list-group-item-action">Location: </li>
            <li class="list-group-item list-group-item-action">Member Since: </li>
          </ul>
        </div>
        `;
    }

    showRepos(repos) {
        console.log("show repos;");
        console.log(repos);
    }

}