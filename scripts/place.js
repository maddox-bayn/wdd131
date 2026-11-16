
// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.querySelector("#current-year").textContent = currentYear;

// Display the document's last modified date
const lastModified = new Date(document.lastModified);

document.querySelector("#last-modified").textContent =
    lastModified.toLocaleString();

// Static weather values
const temperature = 10;
const windSpeed = 5;

// Calculate wind chill using Celsius and km/h
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16));
}

// Check whether wind chill calculation is possible
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#wind-chill").textContent =
        `${windChill.toFixed(1)} °C`;
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}
