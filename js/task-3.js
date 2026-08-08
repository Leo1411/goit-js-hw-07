const nameInput = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
        nameOut.textContent = inputValue;
    } else {
        nameOut.textContent = "Anonymous";
    }
});