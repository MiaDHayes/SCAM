    // const kitchenAidButton = document.getElementById('kitchenAidButton')
    // const cuisinartButton = document.getElementById('cuisinartButton')
    // const ourPlaceButton = document.getElementById('ourPlaceButton')
    // const leCreusetButton = document.getElementById('leCreusetButton')

const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const searchResults = document.getElementById('searchResults')

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
  