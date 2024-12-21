document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("kompaniaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const kompania = document.getElementById("kompania").value.trim();
        const motori = document.getElementById("motori").value;
        const vitiMakina = document.getElementById("viti_makina").value;

        if (!kompania || !motori || !vitiMakina) {
            alert('Ju lutemi plotësoni të gjitha fushat.');
            return;
        }

        alert('Faleminderit! Kompania ' + kompania + ' ka zgjedhur makinën ' + motori + ' e vitit ' + vitiMakina);

        form.reset();
    });
});
