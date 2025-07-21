const upArrow = document.createElement("button");
upArrow.textContent = "cycle through your msgs";
upArrow.style.position = "fixed";
upArrow.style.top = "50px";
upArrow.style.right = "10px";
upArrow.style.zIndex = "1000";
const all = document.getElementsByClassName("whitespace-pre-wrap");
let currentIndex = 0;

upArrow.onclick = () => {
    if (all.length === 0) return;
    all[currentIndex].scrollIntoView({ behavior: "smooth" });
    currentIndex = (currentIndex + 1) % all.length;
};
document.body.appendChild(upArrow);