const db = require('../db')
const {Set, Product} = require('../models')

db.on('error', console.error.bind(console, 'Mongo DB connection error:'))

const main = async () => {
    const set1 = await new Set ({
        set: 'All-Clad D5 Stainless-Steel 10-Piece Essential Cookware Set',
        quantity: 10,
        summary: 'All-Clad d5 stainless-steel cookware features a patented technology of five alternating layers of responsive aluminum and heat-diffusing stainless steel. Each bonded layer serves a specific purpose, creating a noticeable difference in cooking performance. The only cookware of its kind, the d5 line heats slowly and evenly, which results in perfect browning. This durable set includes all the essential pieces you need for everyday cooking and entertaining.',
        type: 'Stainless-steel',
        colours: 'Silver',
        price: 799.95,
        use: ['Ideal for use on all cooktops, including induction.', 'Oven and broiler safe to 600°F.'],
        care: ['Allow cookware to cool before cleaning.', 'Hand-wash.', 'Avoid using steel wool, steel scouring pads and harsh detergents.', 'To remove stubborn food residue and exterior stains, use nylon scrubbing pad and fine-powdered cleanser.'],
        brand: 'All-Clad',
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202403/0216/img55xl.jpg'
    })
    set1.save()

    const products = [{
        product: 'All-Clad D5 8" fry pan',
        dimensions: '8" diam., 1 1/2" high; 1 lb. 13 oz.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202343/0014/all-clad-d5-stainless-steel-fry-pan-xl.jpg'
    },
    {
        product: 'All-Clad D5 10" fry pan',
        dimensions: '10" diam., 2" high (3" high with lid); 4 lb.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202343/0014/all-clad-d5-stainless-steel-fry-pan-xl.jpg'
    },
    {
        product: 'All-Clad D5 3-Qt. Saucepan',
        dimensions: '8" diam., 4" high (5" high with lid); 4 lb. 6 oz.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202351/0010/all-clad-d5-stainless-steel-saucepan-xl.jpg'
    },
    {
        product: 'All-Clad D5 4-Qt Essential Pan',
        dimensions: '11 1/2" diam., 3 1/2" high (5" high with lid); 5 lb. 8 oz.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202343/0019/all-clad-d5-stainless-steel-essential-pan-1-o.jpg'
    },
    {
        product: 'All-Clad D5 6-Qt. Ultimate Soup Pot',
        dimensions: '11 1/2" diam., 4 1/2" high (5 1/2" high with lid); 7 lb.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202343/0039/img50xl.jpg'
    },
    {
        product: 'All-Clad D5 Ladle',
        dimensions: '11 1/4" long; 4-oz. cap.',
        set: set1._id,
        picture: 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202343/0039/img50xl.jpg'
    }]
    await Product.insertMany(products)
    console.log('created products')
}

const run = async() => {
    await main()
    db.close()
}

run()