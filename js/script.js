// This JavaScript code initializes the AOS (Animate On Scroll) library when the window has finished loading.
window.onload = () => {
    // Initialize AOS with a duration of 1000 milliseconds for smooth animations.
    AOS.init({
        duration: 1000,
    });
}

// Function to show an alert when a button is clicked
function showAlert() {
    // Select all elements with class "btn-incomplete"
    var btnIncompleteList = document.querySelectorAll(".btn-incomplete");

    // Select all elements with class "notification"
    var notificationList = document.querySelectorAll(".notification");

    // Iterate over each button in the list
    btnIncompleteList.forEach(function(btnIncomplete, index) {
        // Create a new alert element
        var alertDiv = document.createElement("div");

        // Set the class for styling
        alertDiv.className = "alert alert-primary text-center";

        // Set the ARIA role attribute for accessibility
        alertDiv.setAttribute("role", "alert");

        // Set the text content of the alert
        alertDiv.textContent = "Coming soon";

        // Append the alert element to the corresponding notification element
        notificationList[index].appendChild(alertDiv);

        // Set a timeout to remove the alert after 5 seconds
        setTimeout(function() {
            // Remove the alert element
            alertDiv.remove();
        }, 3000);
    });
}

