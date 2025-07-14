function convertTemp() {
    const input = document.getElementById("tempInput").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultBox = document.getElementById("result");

    if (isNaN(input) || input === "") {
      resultBox.innerHTML = "❌ Please enter a valid number.";
      return;
    }

    const temp = parseFloat(input);
    let result = "";

    if (unit === "Celsius") {
      result += `${(temp * 9/5 + 32).toFixed(2)} °F (Fahrenheit)<br>`;
      result += `${(temp + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (unit === "Fahrenheit") {
      const c = (temp - 32) * 5/9;
      result += `${c.toFixed(2)} °C (Celsius)<br>`;
      result += `${(c + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (unit === "Kelvin") {
      const c = temp - 273.15;
      result += `${c.toFixed(2)} °C (Celsius)<br>`;
      result += `${(c * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
    }

    resultBox.innerHTML = `✅ Converted Temperature:<br>${result}`;
  }