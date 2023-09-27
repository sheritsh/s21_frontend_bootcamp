document.addEventListener("DOMContentLoaded", async () => {
    const userId = localStorage.idUsername;
    const response = await fetch(`/api/myStats/${userId}`);
    const data = await response.json();
    displayStats(data);
  });

  function displayStats(stats) {
    const statsDiv = document.getElementById("userStats");
    if (localStorage.getItem("loggedIn") === "true") {
      statsDiv.innerHTML = `
  <p>Username: ${stats.username}</p>
  <p>Games Played: ${stats.gamesPlayed}</p>
  <p>Games Won: ${stats.gamesWin}</p>
  <p>Games Lost: ${stats.gamesLost}</p>
  <p>Percentage of Wins: ${stats.percentageOfWins}%</p>
`;
    } else {
      statsDiv.innerHTML = "User is not logged in.";
    }
  }