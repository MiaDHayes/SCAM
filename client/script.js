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
    const products = await axios.get(`https://localhost:3001/products`)
    console.log(products.data.results)
}


//Event Listener Function
searchButton.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const query = searchInput.value.trim(); // Get the search query from the input bar
    if (query !== '') {
        performSearch(query); // Perform the search
    } else {
        alert('Please enter a search query.');
    }
})

//Event Listeners for Brands
ruffiniButton.addEventListener('click', () => {
    performSearch('Kitchen Aid');
})

mauvielButton.addEventListener('click', () => {
    performSearch('Cuisinart');
})

greenpanButton.addEventListener('click', () => {
    performSearch('Our Place');
})

allCladButton.addEventListener('click', () => {
    performSearch('Le Creuset');
})

//
//Grab Sets
const getSet = async () => {
    const sets = await axios.get(`https://localhost:3001/products`)
    console.log(sets.data.results)
}
