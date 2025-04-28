function generate() {
    const lengthInput = document.getElementById("length");
    const display = document.getElementById("password");
    const length = parseInt(lengthInput.value);

    if (length < 12 || length > 128) {  // Vérification de la longueur
    display.textContent = "Veuillez choisir une longueur entre 12 et 128.";
    return;
    }

    // Récupération des options de sélection
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    // Création de la chaîne de caractères en fonction des cases cochées
    let characters = "";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (characters === "") {
    display.textContent = "Veuillez sélectionner au moins un type de caractère.";
    return;
    }

    let password = "";  // Créer le mot de passe avec des caractères aléatoires
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
    }

    display.textContent = password;
}