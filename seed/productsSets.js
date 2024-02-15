const db = require('../db')
const {Set, Product} = require('../models')

db.on('error', console.error.bind(console, 'Mongo DB connection error:'))

const main = async () => {

    const createSet = (set) => {
        return Set.create(set)
    }

    const set1 = await createSet ({
        set: 'All-Clad Collective 10-Piece Cookware Set',
        quantity: 10,
        summary: 'Cook with the best of All-Clad metals, all in one set. A Williams Sonoma exclusive, the All-Clad Collective combines pans from the company\'s premium bonded-metal combinations - d5, D3 and Copper Core - in one unified collection. Each piece is designed for a specific task, so you can take a more specialized approach to cooking and get excellent results every time. All the pans in the Collective feature the same streamlined design, with contoured handles, flared rims and a brushed finish.',
        type: 'Combination',
        colours: ['Silver'],
        price: 999.95,
        use: ['Ideal for use on any cooktop, including induction.', 'Oven and broiler safe to 600°F.', 'Long handles stay cool on stovetop but not in oven. Use care when removing from oven. Do not leave unattended.'],
        care: ['Allow pans to cool before washing.', 'Hand-wash.', 'Avoid using steel wool, steel scouring pads and harsh detergents.', 'Stubborn food residue and exterior stains can be removed with nylon scrubbing pad and fine-powdered cleanser.'],
        brand: 'All-Clad',
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202345/0036/img36xl.jpg'
    })

    const products = [{
        product: 'All-Clad Collective 8" Fry Pan',
        dimensions: '8 1/2" diam., 4" high; 1 lb. 15 oz.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202345/0023/all-clad-collective-fry-pan-xl.jpg'
    },
    {
        product: 'All-Clad Collective 10" Fry Pan',
        dimensions: '10 1/2" diam., 4" high; 2 lb. 15 oz.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202345/0023/all-clad-collective-fry-pan-xl.jpg'
    },
    {
        product: 'All-Clad Collective 1 1/2-Qt. Saucepan',
        dimensions: '6 3/4" diam., 5 1/4" high; 2 lb. 11 oz. with lid.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202345/0017/all-clad-collective-saucepan-xl.jpg'
    },
    {
        product: 'All-Clad Collective 3-Qt. Saucepan',
        dimensions: '8 3/4" diam., 6" high; 4 lb. with lid.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202345/0017/all-clad-collective-saucepan-xl.jpg'
    },
    {
        product: 'All-Clad Collective 5-Qt. Sauteuse',
        dimensions: '11 1/4" diam., 5" high; 5 lb. 14 oz. with lid.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202343/0065/img6xl.jpg'
    },
    {
        product: 'All-Clad Collective 8-Qt. Rondeau',
        dimensions: '13" diam., 6" high; 7 lb. 14 oz.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202345/0056/img2xl.jpg'
    }]
    await Product.insertMany(products)
    console.log('created products')
}

const run = async() => {
    await main()
    db.close()
}
run()