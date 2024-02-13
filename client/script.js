const kitchenAidButton = document.getElementById('kitchenAidButton')
const cuisinartButton = document.getElementById('cuisinartButton')
const ourPlaceButton = document.getElementById('ourPlaceButton')
const leCreusetButton = document.getElementById('leCreusetButton')
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const searchResults = document.getElementById('searchResults')

const BASE_URL = 'http://localhost:3001/'

// function performSearch(query) {
//     searchResults.innerHTML = ''
//     const filteredProducts = products.filter(product =>
//         product.toLowerCase().inclused(query.toLowerCase())
//     )
//     if (filteredProducts.length > 0) {
//         filteredProducts.forEach(product => {
//             const resultElement = document.createElement('div')
//             resultElement.textContent = product
//             searchResults.appendChild(resultElement)
//         })
//     } else {
//         const noResultElement = document.createElement('div')
//         noResultElement.textContent = 'No matching products found.'
//         searchResults.appendChild(noResultElement)
//     }

// }



const getProduct = async () => {
    const products = await axios.get(`https://localhost:3001/products`)
    console.log(products.data.results)
}

