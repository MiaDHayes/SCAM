const ruffoniButton = document.getElementById('ruffoniButton')
const mauvielButton = document.getElementById('mauvielButton')
const greenpanButton = document.getElementById('greenpanButton')
const allCladButton = document.getElementById('allcladButton')
const zwillingButton = document.getElementById('zwillingButton')
const searchInput = document.getElementById('inputBar')
//const searchResults = document.getElementById('searchResults')
const searchButton = document.getElementById('searchButton')


const BASE_URL = 'http://localhost:3001/'


//Fetch and Search
const performSearch = async (query) => {
    try {
        const response = await axios.get(`http://localhost:3001/products`, {
            params: {
                query: query
            }
        })
        const products = response.data.results
        console.log(products)
        // Handle displaying the products in your UI
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

//Event Listener Function
searchButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const query = searchInput.value.trim() // Get the search query from the input bar
    if (query !== '') {
        performSearch(query)
    } else {
        alert('Please enter a search query.')
    }
})

//Grab Products
const getProduct = async () => {
    try {
        const products = await axios.get(`https://localhost:3001/products/${searchInput.value}`)
        console.log(products.data.results)
    } catch (error) {
        console.error('Error fetching products ;c :', error)
    }
}
//

const fetchBrandData = async (brandName) => {
    try {
        const response = await axios.get(`https://localhost:3001/brands/${brandName}`)
        return response.data
    } catch (error) {
        console.error(`Error fetching data for ${brandName}:`, error)
        return null
    }
}

const displayBrandData = (brandData) => {
    if (brandData) {
        console.log('Brand Data:', brandData)
    } else {
        console.log('No data avaliable for this brand.')
    }
}


//Event Listeners for Brands
ruffoniButton.addEventListener('click', async () => {
    const brandName = 'Ruffoni'
    const brandData = await fetchBrandData(brandName)
    displayBrandData(brandData)
})

mauvielButton.addEventListener('click', async () => {
    const brandName = 'Mauviel'
    const brandData = await fetchBrandData(brandName)
    displayBrandData(brandData)
})

greenpanButton.addEventListener('click', async () => {
    const brandName = 'GreenPan'
    const brandData = await fetchBrandData(brandName)
    displayBrandData(brandData)
})

allCladButton.addEventListener('click', async () => {
    const brandName = 'All-Clad'
    const brandData = await fetchBrandData(brandName)
    displayBrandData(brandData)
})

zwillingButton.addEventListener('click', async () => {
    const brandName = 'Zwilling'
    const brandData = await fetchBrandData(brandName)
    displayBrandData(brandData)
})

//









//Grab Sets
const getSet = async () => {
    try {
        const sets = await axios.get(`https://localhost:3001/products`)
        console.log(sets.data.results)
    } catch (error) {
        console.error('Error fetching sets ;c :', error)
    }
}

