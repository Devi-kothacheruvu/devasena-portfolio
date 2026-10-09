document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
  document.querySelectorAll(".flash-close").forEach(button => button.addEventListener("click", () => button.closest(".flash")?.remove()));
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  if (password && confirmPassword) {
    const check = () => confirmPassword.setCustomValidity(confirmPassword.value && confirmPassword.value !== password.value ? "Passwords do not match." : "");
    confirmPassword.addEventListener("input", check);
    password.addEventListener("input", check);
  }
});
