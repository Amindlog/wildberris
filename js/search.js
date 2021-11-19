let search = function() {
    let input = document.querySelector('.search-block > input');

    let search = document.getElementById('button-addon2');
    search.addEventListener('click', (event) => {
        console.log(input.value);
    });
}
search();