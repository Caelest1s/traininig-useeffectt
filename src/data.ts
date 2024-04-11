const products = [
    {
        id: 1,
        nome: "TV",
        price: 2000.0
    },
    {
        id: 2,
        nome: "Computador",
        price: 3000.0
    }
]

export function findProduct(id: number) {
    return products.find(x => x.id == id)
}