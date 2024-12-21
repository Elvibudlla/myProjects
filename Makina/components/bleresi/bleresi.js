document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bleresiForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emri = document.getElementById("emri").value.trim();
        const mbiemri = document.getElementById("mbiemri").value.trim();
        const makina = document.getElementById("makina").value;

        if (!emri || !mbiemri || !makina) {
            alert("Ju lutemi plotësoni të gjitha fushat.");
            return;
        }

        alert("Faleminderit, " + emri + " " + mbiemri + ". Ju keni zgjedhur: " + makina);

        form.reset();
    });
});

