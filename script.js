// Function to convert USD to CAD
function usdToCad() {
    var usdAmount = parseFloat(document.getElementById("usdInput").value);
    if (isNaN(usdAmount)) {
        alert("Please enter a valid USD amount.");
        return;
    }

    var exchangeRate = 1.33; // Hardcoded exchange rate
    var cadAmount = usdAmount * exchangeRate;
    document.getElementById("usdToCadResult").innerHTML = "Converted Amount: CAD " + cadAmount.toFixed(3);
}

// Function to convert CAD to USD
function cadToUsd() {
    var cadAmount = parseFloat(document.getElementById("cadInput").value);
    if (isNaN(cadAmount)) {
        alert("Please enter a valid CAD amount.");
        return;
    }

    var exchangeRate = 0.75; // Hardcoded exchange rate
    var usdAmount = cadAmount * exchangeRate;
    document.getElementById("cadToUsdResult").innerHTML = "Converted Amount: USD " + usdAmount.toFixed(3);
}
