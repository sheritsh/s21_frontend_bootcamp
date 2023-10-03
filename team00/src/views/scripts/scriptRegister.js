async function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = { username, password };

    try {
      const response = await fetch("/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      Swal.fire({
        title: "You have successfully registered!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "A user with this username already exists!",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error:", error);
    }
  }