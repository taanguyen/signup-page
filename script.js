const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    const inputs = Array.from(document.getElementsByTagName("input"));
    inputs.forEach(elem => {
        elem.className = "required";
    }
    )
});

;
const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("change", (event) => {
    const password = document.getElementById("password");
    const doesntMatchText = document.getElementById("password-unequal");
    if (password.value !== event.target.value) {
        doesntMatchText.style.visibility = "visible";
    } else {
        doesntMatchText.style.visibility = "hidden";
    }
})
