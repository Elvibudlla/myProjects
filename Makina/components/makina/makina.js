document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("makinaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emri = document.getElementById("emri").value.trim();
        const lloji = document.getElementById("lloji").value.trim();
        const cmimi = document.getElementById("cmimi").value.trim();
        const viti = document.getElementById("viti").value.trim();
        const motori = document.getElementById("motori").value;

        if (!emri || !lloji || !cmimi || !viti || !motori) {
            alert('Ju lutemi plotësoni të gjitha fushat.');
            return;
        }

        alert('Faleminderit! Makina ' + emri + ' e llojit ' + lloji + ' ka çmim ' + cmimi + ' dhe është prodhuar në vitin ' + viti + ' me motor ' + motori);

        form.reset();
    });
});
