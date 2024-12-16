const addToCartTable=require('../models/addToCart')

exports.insertaddtocart = (req, res) => {
    const { productId, loginEmail, cart } = req.body;


    if (cart && cart.item) {
        // Loop through each product in the cart and create an array of cart items
        const cartItems = Object.keys(cart.item).map(productId => {
            return {
                user_id: loginEmail,             // The user's email
                productId: productId,            // Product ID from cart
                quantity: cart.item[productId]   // The quantity from cart.item
            };
        });
        // Insert all cart items using insertMany
        addToCartTable.insertMany(cartItems)
            .then(() => {
        
                res.status(200).json({ message: 'Cart items inserted successfully' });
            })
            .catch(error => {
    
                res.status(500).json({ error: 'Failed to insert cart items' });
            });
    } else {
    
        res.status(400).json({ message: 'Cart is empty or invalid' });
    }
};
