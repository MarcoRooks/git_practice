let cards = document.getElementById('cards')
let items = document.getElementById('items')
let footer = document.getElementById('footer')
let templateCard = document.getElementById('template-card').content
let templateFooter = document.getElementById('template-footer').content
let templateCart = document.getElementById('template-cart').content
let fragment = document.createDocumentFragment()
let cart ={}



document.addEventListener('DOMContentLoaded', () => {
    fecthcData()
})

cards.addEventListener('click', e =>{
    addToCart(e)
})

items.addEventListener('click', (e)=> {
    btnAction(e)
})

const fecthcData = async () => {
    try {
        let res = await fetch('api.json')
        let data = await res.json()
        mockcards(data)
    } catch (error) {
        console.log(error)
    }
    
}

const mockcards = (data) => {
    data.forEach(product => {
        templateCard.querySelector('h5').textContent = product.title;
        templateCard.querySelector('p').textContent = product.precio;
        templateCard.querySelector('img').setAttribute('src', product.thumbnailUrl);
        templateCard.querySelector('.btn-dark').dataset.id = product.id;

        const clone= templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addToCart = (e) => {
    if(e.target.classList.contains('btn-dark')){
        setCart(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCart = obj => {
    console.log(obj)
    const product = {
        id: obj.querySelector('.btn-dark').dataset.id,
        title: obj.querySelector('h5').textContent,
        precio: obj.querySelector('p').textContent,
        cantidad: 1
    }
    if(cart.hasOwnProperty(product.id)){
        product.cantidad++
    }
    cart[product.id] = {...product}
    mockCart()
}

const mockCart= () =>{
    items.innerHTML= '';
    Object.values(cart).forEach((product) => {
        templateCart.querySelector('th').textContent= product.id
        templateCart.querySelectorAll('td')[0].textContent= product.title
        templateCart.querySelectorAll('td')[1].textContent= product.cantidad
        templateCart.querySelector('.btn-info').dataset.id = product.id
        templateCart.querySelector('.btn-danger').dataset.id = product.id
        templateCart.querySelector('span').textContent= product.cantidad * product.precio

        const clone = templateCart.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    mockFooter()
}

const mockFooter = () =>{
    footer.innerHTML = '';
    if(Object.keys(cart).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito Vacio</th>`
        return 
    }

    const nquantity = Object.values(cart).reduce((acc, {cantidad})=> acc + cantidad,0)
    const nPrice = Object.values(cart).reduce((acc, {cantidad,precio})=> acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent= nquantity
    templateFooter.querySelector('span').textContent= nPrice

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const emptyButton = document.getElementById('empty-cart')
    emptyButton.addEventListener('click', () =>{
        cart = {}
        mockCart()
    })
}

const btnAction= (e) =>{
    if(e.target.classList.contains('btn-info')){
        const product = cart[e.target.dataset.id]
        product.cantidad++
        cart[e.target.dataset.id] = {...product}
        mockCart()
    }
    if(e.target.classList.contains('btn-danger')){
        const product = cart[e.target.dataset.id]
        product.cantidad--
        if(product.cantidad === 0){
            delete cart[e.target.dataset.id]
        }
        cart[e.target.dataset.id]
        mockCart()
    }
    e.stopPropagation()
}
