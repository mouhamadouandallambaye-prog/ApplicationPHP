// On séléctionne des champs du formulaire
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnSubmit = document.getElementById("btnSubmit");

// On désactive le bouton de soumission par défaut 
btnSubmit.disabled = true;

// Afficher ou masquer les messages d'erreurs
function showError(input, message){
    const baliseP = input.nextElementSibling;
    if (message){
        baliseP.textContent = message;
        input.classList.add("is-invalid");
    } else {
        baliseP.textContent = "";
        input.classList.remove("is-invalid");
    }
}

// Vérifie la validité globale pour activer le bouton
function checkFormValidity() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // On récupère les erreurs via le validateur
    const emailError = Validator.emailValidator("L'email", email);
    const passwordError = Validator.passwordValidator("Le mot de passe", password, 8);

    if (!emailError && !passwordError) {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

// Événements de saisie
emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();
    const error = Validator.emailValidator("L'email", email);
    
    if (error) {
        showError(emailInput, error.message);
    } else {
        showError(emailInput, "");
    }
    checkFormValidity(); 
});

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value.trim();
    const error = Validator.passwordValidator("Le mot de passe", password, 8);
    
    if (error) {
        showError(passwordInput, error.message);
    } else {
        showError(passwordInput, "");
    }
    checkFormValidity(); 
});

//Affiche le message connexion réussie avant redirection 
// document.getElementById("loginForm").addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     Swal.fire({
//         title: "Succès",
//         text: "Connexion réussie",
//         icon: "success",
//         timer: 1000,
//         timerProgressBar: true,
//     }).then(() => {
//         setTimeout(() => { document.getElementById("loginForm").submit(); }, 100);
//     })
// });

