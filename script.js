```javascript   
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTOS
    ========================= */

    const brandButtons =
        document.querySelectorAll(".brand-card");

    const productCards =
        document.querySelectorAll(".product-card");

    const productButtons =
        document.querySelectorAll(".product-button");

    const showAllButton =
        document.getElementById("show-all");

    const productModal =
        document.getElementById("product-modal");

    const closeButton =
        document.querySelector(".close-product");

    const modalBrand =
        document.querySelector(".product-modal-brand");

    const modalTitle =
        document.querySelector(".product-modal-info h2");

    const modalDescription =
        document.querySelector(".product-modal-description");

    const modalDetails =
        document.querySelector(".product-details");

    const modalPrice =
        document.querySelector(".product-modal-price");

    const modalContactButton =
        document.querySelector(".product-modal-button");


    /* =========================
       DATOS DE PRODUCTOS
    ========================= */

    const products = {

        "tec-italy": {
            brand: "Tec Italy",
            name: "Producto Tec Italy",
            description:
                "Producto profesional de Tec Italy. Próximamente agregaremos la descripción completa.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "salerm": {
            brand: "Salerm",
            name: "Producto Salerm",
            description:
                "Producto profesional de Salerm. Próximamente agregaremos la descripción completa.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "yellow": {
            brand: "Yellow",
            name: "Producto Yellow",
            description:
                "Producto profesional de Yellow. Próximamente agregaremos la descripción completa.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "lendan": {
            brand: "Lendan",
            name: "Producto Lendan",
            description:
                "Producto profesional de Lendan. Próximamente agregaremos la descripción completa.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        },

        "alfaparf": {
            brand: "Alfaparf Milano",
            name: "Producto Alfaparf Milano",
            description:
                "Producto profesional de Alfaparf Milano. Próximamente agregaremos la descripción completa.",
            size: "Próximamente",
            use: "Próximamente",
            availability: "Consultar",
            price: "₡00.000"
        }

    };


    /* =========================
       FILTRAR MARCA
    ========================= */

    brandButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedBrand =
                button.getAttribute("data-brand");


            /* Quitar selección */

            brandButtons.forEach(function (otherButton) {

                otherButton.classList.remove("active");

            });


            /* Seleccionar marca */

            button.classList.add("active");


            /* Mostrar solamente esa marca */

            productCards.forEach(function (card) {

                const cardBrand =
                    card.getAttribute("data-brand");


                if (cardBrand === selectedBrand) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });


            /* Llevar al catálogo */

            const catalog =
                document.getElementById("catalogo");

            if (catalog) {

                catalog.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================
       MOSTRAR TODOS
    ========================= */

    if (showAllButton) {

        showAllButton.addEventListener("click", function () {

            productCards.forEach(function (card) {

                card.style.display = "";

            });


            brandButtons.forEach(function (button) {

                button.classList.remove("active");

            });

        });

    }


    /* =========================
       ABRIR FICHA
    ========================= */

    productButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const productId =
                button.getAttribute("data-product");


            const product =
                products[productId];


            if (!product) {

                console.error(
                    "Producto no encontrado:",
                    productId
                );

                return;

            }


            /* Información */

            modalBrand.textContent =
                product.brand;

            modalTitle.textContent =
                product.name;

            modalDescription.textContent =
                product.description;

            modalPrice.textContent =
                product.price;


            /* Detalles */

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


            /* Abrir */

            productModal.classList.add("open");

            productModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";

        });

    });


    /* =========================
       CERRAR FICHA
    ========================= */

    function closeProductModal() {

        productModal.classList.remove("open");

        productModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    /* Botón X */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProductModal
        );

    }


    /* Clic fuera */

    if (productModal) {

        productModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === productModal
                ) {

                    closeProductModal();

                }

            }
        );

    }


    /* ESC */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeProductModal();

            }

        }
    );


    /* =========================
       CONSULTAR PRODUCTO
    ========================= */

    if (modalContactButton) {

        modalContactButton.addEventListener(
            "click",
            function () {

                const productName =
                    modalTitle.textContent;

                const message =
                    "Hola, me interesa consultar por el producto: "
                    + productName;

                /*
                 * Por ahora mostramos el mensaje.
                 * Cuando tengamos el WhatsApp de Mycosmetics,
                 * aquí podemos conectar directamente el botón.
                 */

                alert(message);

            }
        );

    }

});
```
