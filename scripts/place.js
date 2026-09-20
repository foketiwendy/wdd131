// =========================================
// W03 Country Page - Tonga
// Author: Stellina Wendy Foketi
// =========================================

// Static weather values
const temperature = 28;
const windSpeed = 15;

// Calculate wind chill using the Celsius formula
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// Wind chill is only calculated when the required conditions are met
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// Display weather information
document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;
document.querySelector("#wind-chill").textContent = windChill;

// Display current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Display document last modified date
document.querySelector("#lastModified").textContent = document.lastModified;