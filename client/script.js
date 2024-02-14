const ruffiniButton = document.getElementById('ruffiniButton')
const mauvielButton = document.getElementById('mauvielButton')
const greenpanButton = document.getElementById('greenpanButton')
const allCladButton = document.getElementById('allCladButton')
const searchInput = document.getElementById('searchInput')
const searchResults = document.getElementById('searchResults')
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

//Grab Products
const getProduct = async () => {
    try {
        const products = await axios.get(`https://localhost:3001/products/${searchInput.value}`)
        console.log(products.data.results)
    } catch (error) {
        console.error('Error fetching products ;c :', error)
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


// const searchInput = document.getElementById('searchInput')

// searchInput.addEventListener('submit', async (event) => {
//     event.preventDefault()
//     const 
// })
//
ruffiniButton.addEventListener('click', async (event) => {
    event.preventDefault()
    
})



//Event Listeners for Brands
ruffiniButton.addEventListener('click', () => {
    performSearch('Ruffini');
})

mauvielButton.addEventListener('click', () => {
    performSearch('Mauviel');
})

greenpanButton.addEventListener('click', () => {
    performSearch('GreenPan');
})

allCladButton.addEventListener('click', () => {
    performSearch('All-Clad');
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
