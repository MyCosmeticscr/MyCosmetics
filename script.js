const brandButtons = document.querySelectorAll(".brand-card");
const productCards = document.querySelectorAll(".product-card");

const productModal = document.getElementById("product-modal");


/* =========================
   FILTRO DE MARCAS
========================= */

brandButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedBrand = button.dataset.brand;

        productCards.forEach(card => {

            const productBrand =
                card.querySelector(".product-brand").textContent.trim();

            if (productBrand === selectedBrand) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        document.querySelector("#catalogo").scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   ABRIR FICHA DEL PRODUCTO
========================= */

function openProduct(button) {

    productModal.style.display = "flex";

    document.body.style.overflow = "hidden";

}


/* =========================
   CERRAR FICHA
========================= */

function closeProduct() {

    productModal.style.display = "none";

    document.body.style.overflow = "";

}


/* =========================
   CERRAR AL TOCAR FUERA
========================= */

productModal.addEventListener("click", (event) => {

    if (event.target === productModal) {
        closeProduct();
    }

});


/* =========================
   CERRAR CON ESC
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProduct();
    }

});
