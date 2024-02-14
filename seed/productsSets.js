const db = require('../db')
const {Set, Product} = require('../models')

db.on('error', console.error.bind(console, 'Mongo DB connection error:'))

const main = async () => {

    const createSet = (set) => {
        return Set.create(set)
    }

    const set1 = await createSet ({
        set: 'GreenPan Stanley Tucci Ceramic Nonstick 11-Piece Cookware Set',
        quantity: 11,
        summary: 'Stanley Tucci partnered with GreenPan™ to create a cookware collection from the ground up, focusing on innovations that take cooking to the next level. Made in Italy at GreenPan\'s high-tech facility, these pans blend refined architectural details with pioneering technology. The cutting-edge Plasma Tech treatment complements GreenPan\'s state-of-the-art ceramic nonstick for remarkable PFAS-free performance and unparalleled durability. GreenPan\'s all-new woven induction base stays flat and delivers superior results on all stovetops. Each aspect of this set was individually considered for daily use, from the curved saucepan edges that offer easy stirring to the spacious pasta pot with built-in strainer. It\'s cookware for people, like Stanley Tucci, who love to cook.',
        type: 'Non-stick',
        colours: ['Carrara White', 'Venetian Teal', 'Milano Black'],
        price: 699.95,
        use: ['Do not season.', 'Use low to medium heat.', 'Ideal for use on all cooktops, including induction.', 'To prolong life of cookware, use clarified butter or high-smoke-point oil such as safflower oil, corn oil or refined olive oil. Never let oil smoke or burn.', 'Do not use aerosol cooking sprays or extra-virgin olive oil (regular olive oil is acceptable); carbonized buildup will develop over time, causing food to stick.', 'Oven and broiler safe to 600°F; lids are oven safe to 425°F.', 'Safe for use with metal utensils. For best results, we recommend using silicone or wood utensils.'],
        care: ['Allow cookware to cool before cleaning.', 'Dishwasher safe. However, we recommend hand-washing with soft sponge in hot, soapy water to maintain durability of nonstick surface.', 'Nonstick cookware is naturally subject to wear and tear. We recommend replacing your pans as needed, or approx. every five years.', 'Avoid using steel wool, steel scouring pads and harsh detergents.', 'To remove stubborn food residue and exterior stains, use nylon scrubbing pad and fine-powdered cleanser. Alternatively, use melamine sponge occasionally (not daily).'],
        brand: 'GreenPan',
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202334/0213/img20xl.jpg'
    })

    const products = [{
        product: 'GreenPan Stanley Tucci Ceramic Nonstick 8" Fry Pan',
        dimensions: '8" diam., 4 1/4" high; 2 lb.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202334/0216/img2xl.jpg'
    },
    {
        product: 'GreenPan Stanley Tucci Ceramic Nonstick 10" Fry Pan',
        dimensions: '10" diam., 4 1/2" high; 3 lb. 4 oz.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202334/0216/img2xl.jpg'
    },
    {
        product: 'GreenPan Stanley Tucci Ceramic Nonstick 2-Qt. Saucepan',
        dimensions: '6 1/2" diam., 5 1/2" high; 3 lb. with lid.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202334/0213/img14xl.jpg'
    },
    {
        product: 'GreenPan Stanley Tucci Ceramic Nonstick 4-Qt. Saucepan',
        dimensions: '8 1/4" diam., 6 1/2" high; 4 lb. 8 oz. with lid.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202334/0213/img14xl.jpg'
    },
    {
        product: 'GreenPan Stanley Tucci Ceramic Nonstick 4-Qt. Sauté Pan',
        dimensions: '10 1/2" diam., 5 1/4" high; 4 lb. 5 oz. with lid.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202334/0213/img9xl.jpg'
    },
    {
        product: 'GreenPan Stanley Tucci Ceramic Nonstick 8-Qt. Stockpot',
        dimensions: '10" diam., 6 1/4" high; 9 lb. 8 oz. with insert and lid.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202334/0213/img9xl.jpg'
    }]
    await Product.insertMany(products)
    console.log('created products')
}

const run = async() => {
    await main()
    db.close()
}
run()