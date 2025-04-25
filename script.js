function generate() {
    const lengthInput = document.getElementById("length");
    const display = document.getElementById("password");
    const length = parseInt(lengthInput.value);

    if (length < 12 || length > 128) {  // Vérification de la longueur
    display.textContent = "Veuillez choisir une longueur entre 12 et 128.";
    return;
    }

    // Les caractères autorisés
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let allChars = lowercase + uppercase + numbers + symbols; // Le mot de passe contient au moins un caractère de chaque catégorie

    let password = "";  // Créer le mot de passe avec des caractères aléatoires
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
    }

    display.textContent = password;
}