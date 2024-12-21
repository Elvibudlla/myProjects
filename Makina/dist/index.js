class LinkHandler {
    constructor(buttonId, targetUrl) {
        this.button = document.getElementById(buttonId);
        this.targetUrl = targetUrl;
    }

    addClickListener() {
        if (this.button) {
            this.button.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = this.targetUrl;
            }.bind(this));
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const bleresiLink = new LinkHandler("bleresi", "components/bleresi/bleresi.html");
    const kompaniaLink = new LinkHandler("kompania", "components/kompania/kompania.html");
    const makinaLink = new LinkHandler("makina", "components/makina/makina.html");
    const raportiLink = new LinkHandler("raporti", "components/raporti/raporti.html");
    const shitesiLink = new LinkHandler("shitesi", "components/shitesi/shitesi.html");

    bleresiLink.addClickListener();
    kompaniaLink.addClickListener();
    makinaLink.addClickListener();
    raportiLink.addClickListener();
    shitesiLink.addClickListener();
});
