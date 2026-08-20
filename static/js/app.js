// Handle form submission
document
  .getElementById("cropForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Show loading
    document.getElementById("loading").classList.add("show");
    // Hide previous results
    document.getElementById("results").classList.remove("show");

    // Gather form data
    const formData = {
      N: document.getElementById("N").value,
      P: document.getElementById("P").value,
      K: document.getElementById("K").value,
      temperature: document.getElementById("temperature").value,
      humidity: document.getElementById("humidity").value,
      ph: document.getElementById("ph").value,
      rainfall: document.getElementById("rainfall").value,
    };

    try {
      // Make POST request to backend
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse JSON response
      const data = await response.json();

      // Hide loading
      document.getElementById("loading").classList.remove("show");

      // Check for success
      if (data.success) {
        // Display results
        const cropGrid = document.getElementById("cropGrid");
        // Clear previous results
        cropGrid.innerHTML = "";
        // Populate new results
        data.recommendations.forEach((crop, index) => {
          const cropCard = document.createElement("div");
          cropCard.className = "crop-card";
          cropCard.innerHTML = `
                            <div class="crop-rank">#${
                              index + 1
                            } Recommendation</div>
                            <div class="crop-name">${crop.crop}</div>
                            <div class="crop-confidence">${
                              crop.confidence
                            }% Confidence</div>
                            <div class="confidence-bar">
                            <div class="confidence-fill" style="width: ${
                              crop.confidence
                            }%"></div>
                        </div>
                        `;
          cropGrid.appendChild(cropCard);
        });

        // Show results section
        document.getElementById("results").classList.add("show");
      } else {
        // Show error message
        alert("Error: " + data.error);
      }
    } catch (error) {
      // Hide loading when error occurs
      document.getElementById("loading").classList.remove("show");
      alert("Error making prediction: " + error);
    }
  });
