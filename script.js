const username = "saksham-w";
const profileUrl = `https://api.github.com/users/${username}`;
const reposUrl = `https://api.github.com/users/${username}/repos`;

const myName = document.querySelector("#name");
const myFollowers = document.querySelector("#followers");
const myFollowing = document.querySelector("#following");
const myLogin = document.querySelector("#login");
const myLocation = document.querySelector("#location");
const myBio = document.querySelector("#bio");
const myEmail = document.querySelector("#email");
const myX = document.querySelector("#twitter");
const myPP = document.querySelector("#pp");

fetch(profileUrl)
  .then((rawData) => {
    return rawData.json();
  })
  .then((data) => {
    myName.textContent = data.name;
    myFollowers.textContent = data.followers;
    myFollowing.textContent = data.following;
    myLogin.textContent = data.login;
    myLocation.textContent = data.location;
    myBio.textContent = data.bio;
    myEmail.textContent = data.email;
    myPP.setAttribute("src", data.avatar_url);
    myX.setAttribute("href", `https://x.com/${data.twitter_username}`);
  });

fetch(reposUrl)
  .then((rawArr) => {
    return rawArr.json();
  })
  .then((arr) => {
    arr.map((repo) => {
      const singleRepo=document.createElement('div')
      singleRepo.classList.add('singleRepo')
      
      const repoName=document.createElement('h2')
      repoName.textContent=repo.name //first repository ko thau ma API bata Github repo ko nam aauchha
      repoName.classList.add('repoName')

      const repoBio=document.createElement('p')
      repoBio.textContent=repo?.description
      repoBio.classList.add('repoBio')

      const repoMade=document.createElement('p')
      repoMade.innerHTML=`<strong>Made with: </strong>${repo?.language[0]}`
      repoMade.classList.add('repoMade')
      
      const linker=document.createElement('div')
      linker.classList.add('linker')

      const star=document.createElement('div')
      star.innerHTML='<i class="ri-star-s-fill"></i>'
      star.classList.add('star')
      //
      const starClass=document.createElement('p')
      starClass.textContent=repo.stargazers_count
      starClass.classList.add('starClass')
      star.appendChild(starClass)

      const link=document.createElement('div')
      link.innerHTML='<i class="ri-link"></i>'
      link.classList.add('link')
      //
      const linkClass=document.createElement('a')
      linkClass.textContent='View Repository'
      linkClass.setAttribute('href',repo.html_url)
      link.appendChild(linkClass)
      
      singleRepo.appendChild(repoName)
      singleRepo.appendChild(repoBio)
      singleRepo.appendChild(repoMade)
      singleRepo.appendChild(linker)


      document.querySelector('#repo').appendChild(singleRepo)
    });
  });
