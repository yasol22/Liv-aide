function checkPasswdValue() {
    var firstPass = document.getElementById('first-paswd').value;
    var secondPass = document.getElementById('second-paswd').value;

    if (firstPass === secondPass) {
        return true;
    } else {
        alert("Merci d'entrer deux fois le même mot de passe.");
        return false;
    }
}
