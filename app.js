// RULES
let showBtn = document.getElementById("showRules");

showBtn.addEventListener("click", () => {
    if (rules.style.display == "none") {
        rules.style.display = "block";
        showBtn.textContent = "HIDE RULES";
    } else if (rules.style.display = "block") {
        rules.style.display = "none";
        showBtn.textContent = "SHOW RULES";

    }
});

