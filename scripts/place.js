// Update Year and Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) ? 
        (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C" 
        : "N/A";
}

// Set Wind Chill
document.getElementById("wind-chill").textContent = calculateWindChill(28, 10);
