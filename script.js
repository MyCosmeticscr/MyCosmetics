document.addEventListener("DOMContentLoaded", () => {

    const brandButtons = document.querySelectorAll(".brand-card");
    const productCards = document.querySelectorAll(".product-card");

    const productModal = document.getElementById("product-modal");

    const modalBrand = document.querySelector(".product-modal-brand");
    const modalTitle = document.querySelector(".product-modal-info h2");
    const modalDescription = document.querySelector(".product-modal-description");
    const modalDetails = document.querySelector(".product-details");
    const modalPrice = document.querySelector(".product-modal-price");


    /* =========================
       DATOS DE LOS PRODUCTOS
    ========================= */

    const products = {

        "tec-italy": {
            brand: "Tec Italy",
            name: "Producto Tec Italy",
            description: "Aquí aparecerá la descripción completa del producto Tec Italy.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "salerm": {
            brand: "Salerm",
            name: "Producto Salerm",
            description: "Aquí aparecerá la descripción completa del producto Salerm.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "yellow": {
            brand: "Yellow",
            name: "Producto Yellow",
            description: "Aquí aparecerá la descripción completa del producto Yellow.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "lendan": {
            brand: "Lendan",
            name: "Producto Lendan",
            description: "Aquí aparecerá la descripción completa del producto Lendan.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "alfaparf": {
            brand: "Alfaparf Milano",
            name: "Producto Alfaparf Milano",
            description: "Aquí aparecerá la descripción completa del producto Alfaparf Milano.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        }

    };


    /* =========================
       BOTONES DE MARCAS
    ========================= */

    brandButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedBrand = button.dataset.brand;

            productCards.forEach(card => {

                const brandElement = card.querySelector(".product-brand");

                if (!brandElement) return;

                const productBrand = brandElement.textContent.trim();

                if (productBrand === selectedBrand) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

            const catalog = document.querySelector("#catalogo");

            if (catalog) {
                catalog.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    /* =========================
       BOTONES "VER PRODUCTO"
    ========================= */

    const productButtons = document.querySelectorAll(".product-button");

    productButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productId = button.dataset.product;

            const product = products[productId];

            if (!product || !productModal) {
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

        });

    });


    /* =========================
       CERRAR FICHA
    ========================= */

    window.closeProduct = function () {

        if (!productModal) return;

        productModal.style.display = "none";

        document.body.style.overflow = "";

    };


    /* =========================
       CERRAR TOCANDO FUERA
    ========================= */

    if (productModal) {

        productModal.addEventListener("click", event => {

            if (event.target === productModal) {
                window.closeProduct();
            }

        });

    }


    /* =========================
       CERRAR CON ESC
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            window.closeProduct();
        }

    });

});
