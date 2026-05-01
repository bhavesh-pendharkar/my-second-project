let transactions = [];

function addTransaction() {
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!desc || isNaN(amount)) return;

  const transaction = { desc, amount };
  transactions.push(transaction);

  updateUI();

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

function updateUI() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  let balance = 0;

  transactions.forEach((t, index) => {
    balance += t.amount;

    const li = document.createElement("li");
    li.innerText = `${t.desc}: ₹${t.amount}`;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.onclick = () => {
      transactions.splice(index, 1);
      updateUI();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });

  document.getElementById("balance").innerText = balance;
}