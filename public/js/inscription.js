document.addEventListener("DOMContentLoaded", function() {
    
    // 1. On cherche le bouton d'inscription (indique que nous sommes sur la bonne page)
    const btnSubmit = document.getElementById("btnRegister") || document.querySelector("button[name='frmRegister']");

    // 2. SÉCURITÉ : Si le bouton n'existe pas, on arrête TOUT le script pour cette page
    if (!btnSubmit) {
        return; 
    }

    // 3. SÉLECTION DES ÉLÉMENTS (Uniquement exécuté si le bouton existe)
    const prenomInput   = document.getElementById("prenom");
    const nomInput      = document.getElementById("nom");
    const emailInput    = document.getElementById("email");
    const phoneInput    = document.getElementById("phone"); 
    const roleSelect    = document.getElementById("role");
    const adresseInput  = document.getElementById("adresse");
    const passwordInput = document.getElementById("password");

    btnSubmit.disabled = true;

    function showError(input, message) {
        if (!input) return;
        const errorDisplay = input.nextElementSibling; 
        if (message) {
            input.classList.add("is-invalid");
            if (errorDisplay) errorDisplay.textContent = message;
        } else {
            input.classList.remove("is-invalid");
            if (errorDisplay) errorDisplay.textContent = "";
        }
    }

    function checkFormValidity() {
        const prenomErr = Validator.nameValidator("Le prénom", 2, 30, prenomInput.value);
        const nomErr    = Validator.nameValidator("Le nom", 2, 30, nomInput.value);
        const emailErr  = Validator.emailValidator("L'email", emailInput.value);
        const phoneErr  = Validator.phoneValidator("Le téléphone", 9, 15, phoneInput.value);
        const adresseErr = Validator.adresseValidator("L'adresse", 5, 100, adresseInput.value);
        const passwordErr = Validator.passwordValidator("Le mot de passe", passwordInput.value, 8);
        const roleValid = roleSelect.value !== "";
    
        const isFormValid = !prenomErr && !nomErr && !emailErr && !phoneErr && !adresseErr && !passwordErr && roleValid;
        btnSubmit.disabled = !isFormValid;
    }

    // ÉCOUTEURS
    prenomInput.addEventListener("input", () => {
        const err = Validator.nameValidator("Le prénom", 2, 30, prenomInput.value);
        showError(prenomInput, err ? err.message : "");
        checkFormValidity();
    });

    nomInput.addEventListener("input", () => {
        const err = Validator.nameValidator("Le nom", 2, 30, nomInput.value);
        showError(nomInput, err ? err.message : "");
        checkFormValidity();
    });

    emailInput.addEventListener("input", () => {
        const err = Validator.emailValidator("L'email", emailInput.value);
        showError(emailInput, err ? err.message : "");
        checkFormValidity();
    });

    if (phoneInput) {
        phoneInput.addEventListener("input", () => {
            const err = Validator.phoneValidator("Le téléphone", 9, 15, phoneInput.value);
            showError(phoneInput, err ? err.message : "");
            checkFormValidity();
        });
    }

    adresseInput.addEventListener("input", () => {
        const err = Validator.adresseValidator("L'adresse", 5, 100, adresseInput.value);
        showError(adresseInput, err ? err.message : "");
        checkFormValidity();
    });

    passwordInput.addEventListener("input", () => {
        const err = Validator.passwordValidator("Le mot de passe", passwordInput.value, 8);
        showError(passwordInput, err ? err.message : "");
        checkFormValidity();
    });

    roleSelect.addEventListener("change", checkFormValidity);

    console.log("Validation Inscription active.");
});