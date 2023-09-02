function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

learnMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetModalId = button.getAttribute("data-target");
    const targetModal = document.getElementById(targetModalId);
    targetModal.style.display = "flex";

    // Add an event listener to close the modal when "Esc" key is pressed
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal(targetModalId);
      }
    });
  });
});
