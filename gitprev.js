// JavaScript
const apiUrl = "https://api.github.com/users/your_username"; //Change "your_username" by your actual GitHub username
const accessToken = "your_token"; //Api Token (Generate it in GitHub settings and paste here)
                                                                //This might be cause vulnerabilities, I'm not responsible of security breaches

fetch(apiUrl, {
  headers: {
    Authorization: `token ${accessToken}`
  }
})
  .then((response) => response.json())
  .then((data) => {
    const profileImg = document.querySelector(".gitprev-img");
    profileImg.src = data.avatar_url;

    const name = document.querySelector(".gitprev-name");
    name.textContent = data.name;
    
    const username = document.querySelector(".gitprev-username");
    username.textContent =data.login;

    const description = document.querySelector(".gitprev-description");
    description.textContent = data.bio;

    const location = document.querySelector(".gitprev-location");
    location.textContent = `${data.location}`;

    const publicRepos = document.querySelector(".gitprev-repos");
    publicRepos.textContent = `Public repos: ${data.public_repos}`;
  })
  .catch((error) => {
    console.log(error);
  });
