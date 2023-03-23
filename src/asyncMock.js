// minuto 56 clase promesas



const products = [
    { 
        id: '1', 
        name: 'Mesa1', 
        price: 1000, 
        category: 'comedor', 
        img:'/img/comedor.jpg', 
        stock: 25, 
        description:'Descripcion de Mesa'
    },
    { id: '2', 
    name: 'Mesa2', 
    price: 800, 
    category: 'comedor', 
    img:'/img/comedor1.jpg', 
    stock: 16, 
    description:'Descripcion de Mesa'
    },
    { id: '3', 
    name: 'Mesa3', 
    price: 1200, 
    category: 'comedor', 
    img:'/img/comedor2.jpg', 
    stock: 10, 
    description:'Descripcion de Mesa'},
    { 
        id: '1', 
        name: 'Cocina1', 
        price: 1000, 
        category: 'cocina', 
        img:'/img/cocina.jpg', 
        stock: 25, 
        description:'Descripcion de cocina'
    },
    { id: '2', 
    name: 'Cocina2', 
    price: 800, 
    category: 'cocina', 
    img:'/img/cocina1.jpg', 
    stock: 16, 
    description:'Descripcion de cocina'
    },
    { id: '3', 
    name: 'sillon', 
    price: 1200, 
    category: 'living', 
    img:'/img/living.jpg', 
    stock: 10, 
    description:'Descripcion de sillon'},
    { id: '3', 
    name: 'sillon1', 
    price: 1200, 
    category: 'living', 
    img:'/img/living1.jpg', 
    stock: 10, 
    description:'Descripcion de sillon'},
    { id: '3', 
    name: 'sillon2', 
    price: 1200, 
    category: 'living', 
    img:'/img/living2.jpg', 
    stock: 10, 
    description:'Descripcion de sillon'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}