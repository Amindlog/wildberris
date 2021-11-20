const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');
    const getData = () => {
        fetch('/db/db.json')
            .then((response) => response.json())
            .then((date) => {
                localStorage.setItem(JSON.stringify(data));
            });
    }
    links.forEach((value) => {
        addEventListener('click', (e) => {
            e.preventDefault()
            getData();
        })
    });

}
getGoods();