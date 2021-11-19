let cart = () => {
    document.querySelector(".button-cart").addEventListener('click', () => {
        document.getElementById('modal-cart').style.display = "flex";
    });

    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('modal-cart').style.display = "";
    })
}
cart();