const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price cells
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(cell => {
        total += Number(cell.textContent);
    });

    // Create a new row
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    
    // Create a single cell that spans both columns
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Add cell to row
    totalRow.appendChild(totalCell);

    // Append row to table
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
