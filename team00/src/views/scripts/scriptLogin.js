 document.addEventListener("DOMContentLoaded", () => {
        const loggedIn = localStorage.getItem("loggedIn");

        if (loggedIn === "true") {
          document.querySelector(".description").style.display = "none";
          document.querySelector(".user-info").style.display = "block";

          const username = localStorage.getItem("username");
          document.getElementById("usernameDisplay").innerText = `Logged in as: ${username}`;
        } else {
          document.querySelector(".description").style.display = "block";
          document.querySelector(".user-info").style.display = "none";
        }
      });

      async function handleSubmit(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const url = `/api/signIn?username=${username}&password=${password}`;

        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const responseData = await response.json();
          if (responseData.success) {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", username);
            localStorage.setItem("idUsername", responseData.id);
            Swal.fire({
              title: "You have successfully logged in!",
              icon: "success",
              confirmButtonText: "OK",
            });
            location.reload();
          } else {
            Swal.fire({
              title: "Login failed. Please check your credentials.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "An error occurred during login.",
            icon: "error",
            confirmButtonText: "OK",
          });

          console.error("Error:", error);
        }
      }

      function logout() {
        localStorage.setItem("loggedIn", "false");
        localStorage.removeItem("username");

        location.reload();
      }