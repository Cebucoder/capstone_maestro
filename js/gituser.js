function getUserProfile() {
    // Make a request to the GitHub API
    fetch(`https://api.github.com/users/cebucoder`)
      .then(response => response.json())
      .then(data => {
        // Check if the profile exists
        if (data.message && data.message === "Not Found") {
          showError("User not available");
        } else {
          // Fetch the number of starred repositories separately
          fetch(`https://api.github.com/users/cebucoder/starred`)
            .then(response => response.json())
            .then(starredRepos => {
              showUserProfile(data, starredRepos.length);
            })
            .catch(error => {
              showUserProfile(data, 0);
              console.error(error);
            });
        }
      })
      .catch(error => {
        showError("Error fetching profile");
        console.error(error);
      });
  }
  
  function showUserProfile(profile, starredCount) {
    document.getElementById("repo").innerHTML = `${profile.public_repos}`;
    document.getElementById("star").innerHTML = `${starredCount}`;
  }
  
  function showError(message) {
    console.log(message);
  }
  getUserProfile();