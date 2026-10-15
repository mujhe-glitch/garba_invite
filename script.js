const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const inviteCard = document.getElementById("invite-card");
const successMessage = document.getElementById("success-message");

// Logic to make the "No" button run away
const moveNoButton = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const randomX = Math.random() * (windowWidth - btnWidth);
    const randomY = Math.random() * (windowHeight - btnHeight);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

// Trigger the move on both mouse hover and mobile tap
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Logic to handle the "Yes" button
yesBtn.addEventListener("click", () => {
    // Hide the question and show the success message
    inviteCard.style.display = "none";
    successMessage.style.display = "block";
});