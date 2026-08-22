const brandButtons = document.querySelectorAll(".brand-card");
const productCards = document.querySelectorAll(".product-card");

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
