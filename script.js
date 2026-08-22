```javascript
const brandButtons = document.querySelectorAll(".brand-card");
const productCards = document.querySelectorAll(".product-card");

const productModal = document.getElementById("product-modal");

const modalBrand = document.querySelector(".product-modal-brand");
const modalTitle = document.querySelector(".product-modal-info h2");
const modalDescription = document.querySelector(".product-modal-description");
const modalDetails = document.querySelector(".product-details");
const modalPrice = document.querySelector(".product-modal-price");


/* =========================
   PRODUCTOS
========================= */

const products = {

    "tec-italy": {
        brand: "Tec Italy",
        name: "Producto Tec Italy",
        description:
            "Aquí aparecerá la descripción completa del producto Tec Italy.",
        size: "Próximamente",
        use: "Próximamente",
        availability: "Consultar",
        price: "₡00.000"
    },

    "salerm": {
        brand: "Salerm",
        name: "Producto Salerm",
        description:
            "Aquí aparecerá la descripción completa del producto Salerm.",
        size: "Próximamente",
        use: "Próximamente",
        availability: "Consultar",
        price: "₡00.000"
    },

    "yellow": {
        brand: "Yellow",
        name: "Producto Yellow",
        description:
            "Aquí aparecerá la descripción completa del producto Yellow.",
        size: "Próximamente",
        use: "Próximamente",
        availability: "Consultar",
        price: "₡00.000"
    },

    "lendan": {
        brand: "Lendan",
        name: "Producto Lendan",
        description:
            "Aquí aparecerá la descripción completa del producto Lendan.",
        size: "Próximamente",
        use: "Próximamente",
        availability: "Consultar",
        price: "₡00.000"
    },

    "alfaparf": {
        brand: "Alfaparf Milano",
        name: "Producto Alfaparf Milano",
        description:
            "Aquí aparecerá la descripción completa del producto Alfaparf Milano.",
        size: "Próximamente",
        use: "Próximamente",
        availability: "Consultar",
        price: "₡00.000"
    }

};


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
   ABRIR FICHA
========================= */

function openProduct(button) {

    const productId = button.dataset.product;

    const product = products[productId];

    if (!product) {
        return;
    }


    modalBrand.textContent = product.brand;

    modalTitle.textContent = product.name;

    modalDescription.textContent = product.description;

    modalDetails.innerHTML = `
        <p>
            <strong>Tamaño:</strong>
            ${product.size}
        </p>

        <p>
            <strong>Uso:</strong>
            ${product.use}
        </p>

        <p>
            <strong>Disponibilidad:</strong>
            ${product.availability}
        </p>
    `;

    modalPrice.textContent = product.price;


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
```
