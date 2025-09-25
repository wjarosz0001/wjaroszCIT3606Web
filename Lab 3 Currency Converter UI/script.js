function convert() {
    const dollarTextbox = document.getElementById("dollarTextbox");
    const euroTextbox = document.getElementById("euroTextbox");

    const euroRate = 0.85;

    if (dollarTextbox.value) {
        // Convert dollars to euros
        const dollarAmount = parseFloat(dollarTextbox.value);
        if (!isNaN(dollarAmount)) {
            euroTextbox.value = (dollarAmount * euroRate).toFixed(2);
        }
    } else if (euroTextbox.value) {
        // Convert euros to dollars
        const euroAmount = parseFloat(euroTextbox.value);
        if (!isNaN(euroAmount)) {
            dollarTextbox.value = (euroAmount / euroRate).toFixed(2);
        }
    }
}