const tableData = [
    { companyName: "Kompania A", purchasePrice: 25000, sellerName: "Shitësi A", salePrice: 30000 },
    { companyName: "Kompania B", purchasePrice: 32000, sellerName: "Shitësi B", salePrice: 35000 },
    { companyName: "Kompania A", purchasePrice: 25000, sellerName: "Shitësi A", salePrice: 30000 },
    { companyName: "Kompania B", purchasePrice: 32000, sellerName: "Shitësi B", salePrice: 35000 },
    { companyName: "Kompania A", purchasePrice: 25000, sellerName: "Shitësi A", salePrice: 30000 },
    { companyName: "Kompania B", purchasePrice: 32000, sellerName: "Shitësi B", salePrice: 35000 },
    { companyName: "Kompania A", purchasePrice: 25000, sellerName: "Shitësi A", salePrice: 30000 },
    { companyName: "Kompania B", purchasePrice: 32000, sellerName: "Shitësi B", salePrice: 35000 },
    { companyName: "Kompania A", purchasePrice: 25000, sellerName: "Shitësi A", salePrice: 30000 },
    { companyName: "Kompania B", purchasePrice: 32000, sellerName: "Shitësi B", salePrice: 35000 },
    { companyName: "Kompania A", purchasePrice: 25000, sellerName: "Shitësi A", salePrice: 30000 },
    { companyName: "Kompania B", purchasePrice: 32000, sellerName: "Shitësi B", salePrice: 35000 },
];

const tableBody = document.querySelector("tbody");

tableData.forEach(function (rowData) {
    const row = document.createElement("tr");

    const companyNameCell = document.createElement("td");
    companyNameCell.textContent = rowData.companyName;
    row.appendChild(companyNameCell);

    const purchasePriceCell = document.createElement("td");
    purchasePriceCell.textContent = rowData.purchasePrice;
    row.appendChild(purchasePriceCell);

    const sellerNameCell = document.createElement("td");
    sellerNameCell.textContent = rowData.sellerName;
    row.appendChild(sellerNameCell);

    const salePriceCell = document.createElement("td");
    salePriceCell.textContent = rowData.salePrice;
    row.appendChild(salePriceCell);

    tableBody.appendChild(row);
});
