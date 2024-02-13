const kitchenAidButton = document.getElementById('kitchenAidButton')
const cuisinartButton = document.getElementById('cuisinartButton')
const ourPlaceButton = document.getElementById('ourPlaceButton')
const leCreusetButton = document.getElementById('leCreusetButton')
const searchInput = document.getElementById('searchInput')
const searchResults = document.getElementById('searchResults')
// const searchButton = document.getElementById('searchButton')


const BASE_URL = 'http://localhost:3001/'


//Fetch and Search
const performSearch = async (query) => {
    try {
        const response = await axios.get(`http://localhost:3001/products`, {
            params: {
                query: query
            }
        });
        const products = response.data.results
        console.log(products)
        // Handle displaying the products in your UI
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

//Event Listener Function
searchButton.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const query = inputBar.value.trim(); // Get the search query from the input bar
    if (query !== '') {
        performSearch(query); // Perform the search
    } else {
        alert('Please enter a search query.');
    }
})

//Event Listeners for Brands
kitchenAidButton.addEventListener('click', () => {
    performSearch('Kitchen Aid');
})

cuisinartButton.addEventListener('click', () => {
    performSearch('Cuisinart');
})

ourPlaceButton.addEventListener('click', () => {
    performSearch('Our Place');
})

leCreusetButton.addEventListener('click', () => {
    performSearch('Le Creuset');
})






// const getProduct = async () => {
//     const products = await axios.get(`https://localhost:3001/products`)
//     console.log(products.data.results)
// }

// button.addEventListener('click', async (event) => {
//     event.preventDefault()
//     let textInput = inputBar.value
// })