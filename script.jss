function calculateBudget() {
  const phone = Number(document.getElementById('phone').value) || 0;
  const chatgpt = Number(document.getElementById('chatgpt').value) || 0;
  const netflix = Number(document.getElementById('netflix').value) || 0;
  const youtube = Number(document.getElementById('youtube').value) || 0;
  const eatingOut = Number(document.getElementById('eatingOut').value) || 0;
  const transport = Number(document.getElementById('transport').value) || 0;
  const groceries = Number(document.getElementById('groceries').value) || 0;
  const shopping = Number(document.getElementById('shopping').value) || 0;
  const misc = Number(document.getElementById('misc').value) || 0;
  const savings = Number(document.getElementById('savings').value) || 0;

  const fixedTotal = phone + chatgpt + netflix + youtube;
  const variableTotal = eatingOut + transport + groceries + shopping + misc + savings;
  const total = fixedTotal + variableTotal;

  let resultText = `Total Expenses: ₹${total}`;

  if (total > 10300) {
    resultText += " ⚠️ Over Budget!";
  } else {
    resultText += " ✅ Within Budget!";
  }

  document.getElementById('result').innerText = resultText;
}

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});
