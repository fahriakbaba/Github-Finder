class UI {
  constructor() {
    this.profile = document.querySelector("#show-profile");
    this.repos = document.querySelector("#show-repos");
  }

  //to show profile
  showProfile(profile) {
    console.log("profile: ", profile);
    this.profile.innerHTML = `
      <div class="row border p-3 m-0 rounded">
        <div class="w-25 " style="width: 15rem">
          <img
            id="profile-image"
            src=${profile.avatar_url}
            class="img-fluid rounded mb-1"
            alt="..."
          />
          <div class="card-body">
            <a href=${profile.html_url} target="_blank" class="btn btn-sm btn-primary w-100">View Profile</a>
          </div>
        </div>
        <div class="left w-75 mt-4">
          <div>
            <span class="badge bg-light text-dark">Following: ${profile.following}</span>
            <span class="badge bg-light text-dark">Followers: ${profile.followers}</span>
          </div>
          <ul id="profile-list" class="list-group mt-2 w-100">
            <li class="list-group-item list-group-item-action">Company: ${profile.company}</li>
            <li class="list-group-item list-group-item-action">Website/Blog: <a href= ${profile.blog} target="_blank"> ${profile.blog}</a></li>
            <li class="list-group-item list-group-item-action">Location: ${profile.location}</li>
            <li class="list-group-item list-group-item-action">User Name: ${profile.login}</li>
          </ul>
        </div>
      </div>
        `;
  }

  //to show repos
  showRepos(repos) {
    console.log(repos.slice(0, 5));
    repos.slice(0, 5).forEach(repo => {
      this.repos.innerHTML += `
      <li class="list-group-item list-group-item-action mb-2 rounded d-flex justify-content-between align-items-center">
        <span class="repo-desc">${repo.description ? repo.description : "No specific repo name"}</span>
        <div class="group-badge">
          <span class="badge bg-primary">Stars: 0</span>
          <span class="badge bg-secondary">Watches: 0</span>
          <span class="badge bg-success">Forks: 0</span>
        </div>
      </li>
          `;
    });
  }

}