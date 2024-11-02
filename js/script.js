function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;
    const resultText = document.getElementById("result-text");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultText.textContent = "Silakan masukkan tinggi dan berat badan yang valid.";
        return;
    }

    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = "Kurus";
    } else if (bmi < 25) {
        category = "Normal";
    } else if (bmi < 30) {
        category = "Gemuk";
    } else {
        category = "Obesitas";
    }

    const genderText = gender === "male" ? "Laki-Laki" : "Wanita";
    resultText.textContent = `Jenis Kelamin: ${genderText}, BMI: ${bmi.toFixed(2)}, Kategori: ${category}`;
}
