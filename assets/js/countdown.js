// countdown.js

document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (March 13, 2024)
    var countDownDate = new Date("Mar 13, 2024 11:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the specified element
        document.getElementById("countdown").innerHTML = "FALTAN " + days + " Días - " + hours + "hrs:"
            + minutes + "min:" + seconds + "s";

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "¡El Día C ha llegado!";
        }
    }, 1000);
});
