const $container = document.querySelector('.container');
const $datosList = document.getElementById('datosList').content;
const $fragment = document.createDocumentFragment();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data) => {
        // console.log(data);
        data.forEach((el) => {

            $datosList.querySelector('h3').textContent = el.id;
            $datosList.querySelector('#name').textContent = `Nombre: ${el.name}`;
            $datosList.querySelector('#user').textContent = `Usuario: ${el.username}`;
            $datosList.querySelector('#email').textContent = `Nombre: ${el.email}`;
            $datosList.querySelector('#phone').textContent = `Nombre: ${el.phone}`;
            $datosList.querySelector('#website').textContent = `Nombre: ${el.website}`;

            let $clone = document.importNode($datosList, true);
            $fragment.appendChild($clone);

        })

        $container.appendChild($fragment);
    })
    .catch((err) => {
        console.log(err);
    });