* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #ffffff;
    color: #171717;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
}


/* =========================
   VARIABLES
========================= */

:root {
    --gold: #c9a96e;
    --gold-light: #e8dcc8;
    --black: #171717;
    --gray: #6b6b6b;
    --light-gray: #f7f7f7;
    --border: #e9e9e9;
}


/* =========================
   DETALLES DECORATIVOS
========================= */

body::before {
    content: "✦";

    position: fixed;

    top: 120px;
    left: 25px;

    font-size: 18px;

    color: var(--gold);

    opacity: 0.45;

    pointer-events: none;

    z-index: 1;

    animation: floatingStar 4s ease-in-out infinite;
}

body::after {
    content: "✧";

    position: fixed;

    right: 30px;
    bottom: 100px;

    font-size: 22px;

    color: var(--gold);

    opacity: 0.35;

    pointer-events: none;

    animation: floatingStar 5s ease-in-out infinite;
}

@keyframes floatingStar {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-8px) rotate(8deg);
    }

}


/* =========================
   HEADER
========================= */

header {
    width: 100%;

    padding: 22px 7%;

    display: flex;

    justify-content: space-between;
    align-items: center;

    position: fixed;

    top: 0;
    left: 0;

    background: rgba(255, 255, 255, 0.9);

    backdrop-filter: blur(14px);

    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    z-index: 1000;
}

.logo {
    color: var(--black);

    text-decoration: none;

    font-size: 26px;

    font-weight: bold;

    letter-spacing: 1px;

    transition: 0.3s;
}

.logo:hover {
    color: var(--gold);
}

nav {
    display: flex;

    gap: 30px;
}

nav a {
    color: #333;

    text-decoration: none;

    font-size: 15px;

    position: relative;

    transition: 0.3s;
}

nav a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 1px;

    background: var(--gold);

    transition: 0.3s;
}

nav a:hover {
    color: var(--gold);
}

nav a:hover::after {
    width: 100%;
}


/* =========================
   PORTADA
========================= */

.hero {
    min-height: 100vh;

    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 120px 20px 60px;

    position: relative;
}

.hero::before {
    content: "✦";

    position: absolute;

    top: 27%;
    right: 15%;

    font-size: 24px;

    color: var(--gold);

    opacity: 0.35;
}

.hero::after {
    content: "";

    position: absolute;

    width: 140px;
    height: 1px;

    background: var(--gold);

    bottom: 80px;

    opacity: 0.5;
}

.small-title {
    font-size: 12px;

    letter-spacing: 4px;

    color: var(--gold);

    margin-bottom: 20px;

    font-weight: bold;
}

.hero h1 {
    font-size: clamp(60px, 10vw, 120px);

    margin-bottom: 25px;

    letter-spacing: -4px;

    color: var(--black);
}

.description {
    max-width: 600px;

    font-size: 19px;

    line-height: 1.7;

    color: var(--gray);

    margin-bottom: 35px;
}


/* =========================
   BOTONES
========================= */

.button,
.product-button {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    background: var(--black);

    color: white;

    padding: 13px 22px;

    border-radius: 12px;

    text-decoration: none;

    font-size: 14px;

    font-weight: bold;

    border: 1px solid var(--black);

    transition: all 0.3s ease;

    cursor: pointer;
}

.button:hover,
.product-button:hover {
    transform: translateY(-3px);

    background: var(--gold);

    border-color: var(--gold);

    box-shadow: 0 10px 25px rgba(201, 169, 110, 0.25);
}


/* =========================
   SECCIONES
========================= */

.section {
    min-height: 70vh;

    padding: 120px 7%;

    text-align: center;

    position: relative;
}

.section:nth-child(even) {
    background: #fafafa;
}

.section h2 {
    font-size: 45px;

    margin-bottom: 25px;

    color: var(--black);
}

.section > p:not(.small-title) {
    max-width: 650px;

    margin: 0 auto;

    font-size: 18px;

    line-height: 1.6;

    color: var(--gray);
}


/* =========================
   MARCAS
========================= */

.brands {
    display: flex;

    justify-content: center;

    align-items: stretch;

    gap: 25px;

    flex-wrap: wrap;

    margin-top: 55px;
}

.brand-card {
    width: 220px;

    min-height: 140px;

    display: flex;

    justify-content: center;

    align-items: center;

    border: 1px solid var(--border);

    border-radius: 18px;

    background: white;

    color: var(--black);

    font-family: Arial, sans-serif;

    cursor: pointer;

    position: relative;

    overflow: hidden;

    transition: all 0.35s ease;

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
}

.brand-card::before {
    content: "✦";

    position: absolute;

    top: 12px;
    right: 15px;

    color: var(--gold);

    opacity: 0;

    transition: 0.3s;
}

.brand-card:hover {
    transform: translateY(-8px);

    border-color: var(--gold);

    box-shadow: 0 15px 35px rgba(201, 169, 110, 0.16);
}

.brand-card:hover::before {
    opacity: 1;
}

.brand-card h3 {
    color: var(--black);

    font-size: 22px;

    transition: color 0.3s ease;
}

.brand-card:hover h3 {
    color: var(--gold);
}


/* =========================
   PRODUCTOS
========================= */

.products {
    width: 100%;

    max-width: 1200px;

    margin: 60px auto 0;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;

    text-align: left;
}

.product-card {
    overflow: hidden;

    background: white;

    border: 1px solid var(--border);

    border-radius: 20px;

    transition: all 0.35s ease;

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);

    position: relative;
}

.product-card::after {
    content: "✦";

    position: absolute;

    top: 15px;
    right: 18px;

    color: var(--gold);

    opacity: 0;

    transition: 0.3s;
}

.product-card:hover {
    transform: translateY(-8px);

    border-color: var(--gold-light);

    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

.product-card:hover::after {
    opacity: 1;
}


/* FOTO */

.product-image {
    width: 100%;

    height: 230px;

    display: flex;

    justify-content: center;

    align-items: center;

    background: #f8f8f8;

    color: #aaa;

    font-size: 14px;
}


/* INFORMACIÓN */

.product-info {
    padding: 25px;
}

.product-brand {
    font-size: 12px !important;

    text-transform: uppercase;

    letter-spacing: 2px;

    color: var(--gold) !important;

    margin-bottom: 10px !important;
}

.product-info h3 {
    font-size: 22px;

    margin-bottom: 12px;

    color: var(--black);
}

.product-description {
    font-size: 15px !important;

    line-height: 1.5;

    margin-bottom: 20px !important;

    color: var(--gray) !important;
}

.product-price {
    font-size: 21px !important;

    font-weight: bold;

    margin-bottom: 20px !important;

    color: var(--black) !important;
}

.product-button {
    font-size: 14px;

    padding: 12px 20px;
}


/* =========================
   FICHA DEL PRODUCTO
========================= */

.product-modal {
    position: fixed;

    inset: 0;

    display: none;

    justify-content: center;

    align-items: center;

    padding: 25px;

    background: rgba(0, 0, 0, 0.55);

    backdrop-filter: blur(12px);

    z-index: 2000;
}

.product-modal-content {
    position: relative;

    width: 100%;

    max-width: 900px;

    max-height: 90vh;

    display: grid;

    grid-template-columns: 1fr 1fr;

    overflow: auto;

    background: white;

    border: 1px solid rgba(201, 169, 110, 0.35);

    border-radius: 24px;

    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);

    animation: productModalIn 0.3s ease;
}

@keyframes productModalIn {

    from {
        opacity: 0;

        transform: translateY(25px) scale(0.97);
    }

    to {
        opacity: 1;

        transform: translateY(0) scale(1);
    }

}

.product-modal-image {
    min-height: 450px;

    display: flex;

    justify-content: center;

    align-items: center;

    background: #f8f8f8;

    color: #aaa;

    font-size: 14px;
}

.product-modal-info {
    padding: 50px;

    display: flex;

    flex-direction: column;

    justify-content: center;
}

.product-modal-brand {
    margin-bottom: 12px;

    color: var(--gold);

    font-size: 13px;

    text-transform: uppercase;

    letter-spacing: 3px;
}

.product-modal-info h2 {
    margin-bottom: 20px;

    font-size: 38px;

    color: var(--black);
}

.product-modal-description {
    margin-bottom: 30px;

    color: var(--gray);

    line-height: 1.7;
}

.product-details {
    display: flex;

    flex-direction: column;

    gap: 12px;

    margin-bottom: 30px;

    color: var(--gray);
}

.product-details strong {
    color: var(--black);
}

.product-modal-price {
    margin-bottom: 25px;

    font-size: 26px;

    font-weight: bold;

    color: var(--black);
}

.product-modal-button {
    width: 100%;

    padding: 15px 20px;

    border: none;

    border-radius: 12px;

    background: var(--black);

    color: white;

    font-size: 15px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.25s;
}

.product-modal-button:hover {
    background: var(--gold);

    transform: translateY(-2px);
}

.close-product {
    position: absolute;

    top: 18px;

    right: 20px;

    width: 40px;

    height: 40px;

    display: flex;

    justify-content: center;

    align-items: center;

    border: none;

    border-radius: 50%;

    background: rgba(0, 0, 0, 0.06);

    color: var(--black);

    font-size: 28px;

    cursor: pointer;

    transition: 0.25s;

    z-index: 2;
}

.close-product:hover {
    background: var(--gold);

    color: white;

    transform: rotate(90deg);
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 35px;

    text-align: center;

    background: #171717;

    color: white;

    border-top: 1px solid var(--gold);

    opacity: 1;
}

footer p {
    opacity: 0.65;

    font-size: 14px;
}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

    .products {
        grid-template-columns: repeat(2, 1fr);
    }

}


/* =========================
   CELULAR
========================= */

@media (max-width: 700px) {

    .product-modal {
        padding: 15px;
    }

    .product-modal-content {
        grid-template-columns: 1fr;

        max-height: 92vh;
    }

    .product-modal-image {
        min-height: 250px;
    }

    .product-modal-info {
        padding: 30px 25px;
    }

    .product-modal-info h2 {
        font-size: 30px;
    }

}


@media (max-width: 600px) {

    header {
        padding: 18px 20px;

        flex-direction: column;

        gap: 15px;
    }

    .logo {
        font-size: 24px;
    }

    nav {
        gap: 15px;

        flex-wrap: wrap;

        justify-content: center;
    }

    nav a {
        font-size: 13px;
    }

    .hero {
        padding: 150px 20px 60px;
    }

    .hero h1 {
        font-size: 58px;

        letter-spacing: -2px;
    }

    .description {
        font-size: 17px;
    }

    .section {
        padding: 90px 20px;
    }

    .section h2 {
        font-size: 35px;
    }

    .brands {
        gap: 15px;
    }

    .brand-card {
        width: 100%;

        max-width: 320px;

        min-height: 110px;
    }

    .products {
        grid-template-columns: 1fr;

        gap: 20px;

        margin-top: 40px;
    }

    .product-image {
        height: 220px;
    }

    .product-info {
        padding: 22px;
    }

    .button {
        padding: 14px 25px;
    }

    .product-button {
        width: 100%;
    }

}
