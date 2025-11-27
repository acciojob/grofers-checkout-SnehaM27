const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(cell => {
        total += Number(cell.textContent);
    });

    const table = document.querySelector("table");

    // Remove old total (if exists)
    const oldAns = document.getElementById("ans");
    if (oldAns) oldAns.parentElement.remove();

    // Create total row
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    totalCell.id = "ans";     // REQUIRED for Cypress tests
    totalCell.colSpan = 2;    // Single cell covering both columns
    totalCell.textContent = total; // ONLY the number

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
