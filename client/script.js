    // const kitchenAidButton = document.getElementById('kitchenAidButton')
    // const cuisinartButton = document.getElementById('cuisinartButton')
    // const ourPlaceButton = document.getElementById('ourPlaceButton')
    // const leCreusetButton = document.getElementById('leCreusetButton')

const searchInput = document.getElementById('searchInput')

const ruffoniButton = document.getElementById('ruffoniButton')
const mauvielButton = document.getElementById('mauvielButton')
const greenpanButton = document.getElementById('greenpanButton')
const allCladButton = document.getElementById('allcladButton')
const zwillingButton = document.getElementById('zwillingButton')
const searchInput = document.getElementById('inputBar')
//const searchResults = document.getElementById('searchResults')
const searchButton = document.getElementById('searchButton')

const BASE_URL = 'http://localhost:3001/'
let sets

const getSet = async (input) => {
    sets = await axios.get(`https://localhost:3001/sets/${input}`)
    console.log(sets.data.results)
}

const set= document.querySelectorAll(`.sets`)
const itemName =document.querySelectorAll("setName")
const itemQuantity= document.querySelectorAll("itemQuantity")
const itemSummary = document.querySelectorAll("itemSummary")
const itemPicture = document.querySelectorAll(`.image`) 
const itemType = document.querySelectorAll("itemType")
const itemColours =document.querySelectorAll("itemColours")
const itemPrice = document.querySelectorAll("itemPrice")
const itemUse = document.querySelectorAll("itemUse")
const itemCare = document.querySelectorAll("itemCare")
const itemBrand = document.querySelectorAll("itemBrand")


const appendSets = (sets) => {
    console.log(setsList)
    const listItem = document.createElement("li")
    const itemName = document.createElement("p")
    const itemPicture = document.createElement("img")
    const itemQuantity= document.createElement("p")
    const itemSummary = document.createElement("p") 
    const itemType = document.createElement("p")
    const itemColours =ddocument.createElement("p")
    const itemPrice = ddocument.createElement("p")
    const itemUse = document.createElement("p")
    const itemCare = document.createElement("p")
    const itemBrand = document.createElement("p")
  
itemPicture.className ="itemPicture"
itemName.className ="itemName"
itemQuantity.className ="itemQUantity"
itemSummary.className ="itemSummary"
itemType.className ="itemType"
itemColours.className ="itemColours"
itemPrice.className ="itemPrice"
itemUse.className ="itemUse"
itemCare.className ="itemCare"
itemBrand.className ="itemBrand"


itemPicture.src = products.data
itemName.textContent = productsSet.Name
itemQuantity.textContent =
itemSummary.textContent =
itemType.textContent =
itemColours.textContent =
itemPrice.textContent =
itemUse.textContent =
itemCare.textContent =
itemBrand.textContent =
       
listItem.appendChild(itemImage)
listItem.appendChild(itemName)
listItem.appendChild(itemQuantity)
listItem.appendChild(itemSummary)
listItem.appendChild(itemType)
listItem.appendChild(itemColours)
listItem.appendChild(itemPrice)
listItem.appendChild(itemUse)
listItem.appendChild(itemCare)
listItem.appendChild(itemBrand)

setList.appendChild(listItem)
       

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

button.addEventListener('ruffoniButton', async (event) => {
        event.preventDefault();
        const inputValue = input.value;
        const response = await axios.get(`https://localhost:3001/products${input}`);
        const setDataList = response.data.sets || [];
        setList.innerHTML = ""
        
   setDataList.forEach(set=> {
        appendSets(sets)
        
        
        })});
        
        getSets();


// Clear populated data
const removeChildNodes = (details) => {
    while (details.firstChild) {
      details.removeChild(details.firstChild)
    }
  }        
  