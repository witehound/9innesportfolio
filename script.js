const openRules = document.getElementById("rule-footer");
const ruleModal = document.getElementById("rules");
const closeIcon = document.getElementById("close-icon");

openRules.addEventListener("click", () => {
  ruleModal.style.display = "block";
  ruleModal.style.display = "flex";
  openRules.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  ruleModal.style.display = "none";
  openRules.style.display = "block";
});
