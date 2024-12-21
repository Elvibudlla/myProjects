document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var role = document.getElementById("role").value;
    var agree = document.getElementById("agree").checked ? "Yes" : "No";

    var newRow = document.createElement("tr");

    var usernameCell = document.createElement("td");
    usernameCell.textContent = username;
    newRow.appendChild(usernameCell);

    var roleCell = document.createElement("td");
    roleCell.textContent = role;
    newRow.appendChild(roleCell);

    var agreeCell = document.createElement("td");
    agreeCell.textContent = agree;
    newRow.appendChild(agreeCell);

    document.getElementById("dataTable").querySelector("tbody").appendChild(newRow);

    document.getElementById("Form").reset();
});
