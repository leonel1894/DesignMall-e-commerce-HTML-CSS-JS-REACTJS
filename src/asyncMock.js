// minuto 56 clase promesas



const products = [
    {
        id: '1',
        name: 'Mesa Coco',
        price: 1000,
        category: 'comedor',
        img: '/img/comedor.jpg',
        stock: 25,
        description: 'Mesa de comedor Coco. Base fabricada en acero pulido y tapa laqueado brillante. ** Este producto es 100% customizable **'
    },
    {
        id: '2',
        name: 'Mesa Stone',
        price: 800,
        category: 'comedor',
        img: '/img/comedor1.jpg',
        stock: 16,
        description: 'Mesa de comedor Stone rectangular. Base fabricada en madera Paraíso por abierto y terminada en poliuretano color negro. Tapa Stone Quartz Statuario. Este producto es 100% customizable. Consultar por otras opciones disponibles. Plazo de entrega: hasta 70 días hábiles'
    },
    {
        id: '3',
        name: 'Mesa Alaska',
        price: 1200,
        category: 'comedor',
        img: '/img/comedor2.jpg',
        stock: 10,
        description: 'Mesa de comedor Alaska con lineas rectas que expresan elegancia y sobriedad. Estructura y tapa elaboradas con madera laqueada en color negro semimate. **Este producto es 100% customizable**'
    },
    {
        id: '4',
        name: 'Respaldo Coco',
        price: 1000,
        category: 'dormitorio',
        img: '/img/dormitorio.jpg',
        stock: 25,
        description: 'Respaldo Coco. Estructura fabricada en madera con marco externo tapizado en cuero y un marco interno acero inoxidable pulido y tapizado en el centro con pana porsche en matelasseado vainilla. ** Este producto es 100% customizable **'
    },
    {
        id: '5',
        name: 'Respaldo Wave',
        price: 800,
        category: 'dormitorio',
        img: '/img/dormitorio1.jpg',
        stock: 16,
        description: 'Respaldo de cama Wave, con diseño minimalista. Fabricado con madera de guindo laqueado en color gris semimate y tapizada con pana porsche color silver. **Todos nuestros productos son 100% customizables**'
    },
    {
        id: '6',
        name: 'Sofá Saha',
        price: 1200,
        category: 'living',
        img: '/img/living.jpg',
        stock: 10,
        description: 'Sofá Saha. Fabricado en madera y tapizado en Oxford Plata. Con patas de aluminio pulido y almohadones decorativos. *** Este producto es 100% customizable, no dude en consultarnos ***'
    },
    {
        id: '7',
        name: 'Sofá Nazaire',
        price: 1200,
        category: 'living',
        img: '/img/living1.jpg',
        stock: 10,
        description: 'Sofá Nazaire de cuatro cuerpos. Con una estructura fabricada en madera, un tapizado en pana Touch gris topo y patas de madera lustras. Medidas 3.00m x 1.00m. *** Todos nuestros productos son 100% customizables ***'
    },
    {
        id: '8',
        name: 'Sofá GUNTA',
        price: 1200,
        category: 'living',
        img: '/img/living2.jpg',
        stock: 10,
        description: 'Sofá doble GUNTA. Fabricado íntegramente en madera. Enchapado en cerezo reconstituido, lustrado natural con OSMO. Tapizado en lino. Este producto forma parte de la colección Gunta'
    },
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