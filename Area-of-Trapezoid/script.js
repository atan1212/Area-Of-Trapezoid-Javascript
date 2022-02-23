// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcArea);

// Event Function
function calcArea() {
    // Input
    let baseA = +document.getElementById("baseA").value;
    let baseB = +document.getElementById("baseB").value;
    let height = +document.getElementById("height").value;
    // Process
    let area = height * (baseA + baseB) / 2;

    // Ouput
    document.getElementById("areaout").innherHTML = area;
}