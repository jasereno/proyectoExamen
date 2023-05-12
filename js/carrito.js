const Clickbutton = document.querySelectorAll(".button")
const tbody = document.querySelector(".tbody")
let carrito = []


Clickbutton.forEach(btn =>
    btn.addEventListener("click", addToCarritoItem)
)

function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest(".cardProductos")
    const itemTittle = item.querySelector("h5").textContent;
    const itemPrice = item.querySelector(".precio").textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const newItem = {
        tittle: itemTittle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}

function addItemCarrito(newItem) {

/*    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].title() === newItem.title) {
            carrito[i].cantidad++;
            console.log(carrito);
            return null;
        }
    }
 */
    carrito.push(newItem)
    renderCarrito()

}

function renderCarrito() {

    tbody.innerHTML = '0'
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        <th scope="row">1</th>
        <td class="table__productos">
        <img src=${item.img} >
        <h6 class="title">${item.tittle}</h6>
        </td>
        <td class="table__precio">
        <p>${item.precio}</p>
        </td>
        <td class="table__cantidad">
        <input type="number" min="1" value=${item.cantidad}>
        <button class="delete btn btn-danger ">x</button>
        </td>
        `

        tr.innerHTML = Content;
        tbody.append(tr) 
    })  
}

