const brandButtons = document.querySelectorAll(".brand-card");

brandButtons.forEach(button => {

    button.addEventListener("click", () => {

        const brand = button.dataset.brand;

        console.log("Marca seleccionada:", brand);

    });

});
