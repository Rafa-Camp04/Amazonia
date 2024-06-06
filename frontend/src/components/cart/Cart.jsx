import './Cart.css'
import Navigation from '../navigation/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as cartItemsActions from '../../store/cart';
import * as productActions from '../../store/product';
import { useSelector } from 'react-redux';

function Cart() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.indexProducts());
    }, [dispatch])

    const allCartItems = useSelector(state => state.cartItems)
    const allProducts = useSelector(state => state.products)

    const updateQuantityHandler = (e, item) => {
        const newQuantity = parseInt(e.target.value, 10)
        dispatch(cartItemsActions.updateCartItemQuantity(item, newQuantity))
    }

    const deleteItemHandler = (item) => {
        dispatch(cartItemsActions.deleteCartItem(item));
    };

    const priceSum = () => {
        let priceSum = 0;
        let strPriceSum

        Object.values(allCartItems).map(item => {
            const product = allProducts[item.productId];

            if (!product) {
                return null
            }

            let stringPrice = String(product.price)
            stringPrice = stringPrice.split('.').join('')
            const newPrice = parseInt(stringPrice, 10)
            priceSum += newPrice * item.quantity


            strPriceSum = String(priceSum)
            strPriceSum = strPriceSum.split('')
                if (strPriceSum.length > 2) {
                    strPriceSum.splice(strPriceSum.length - 2, 0, '.');
                } else {
                    strPriceSum = ['0', '.', ...strPriceSum];
                }
            strPriceSum = strPriceSum.join('');

        });

        return strPriceSum
    }

    const cartQuantity = () => {
        let cartQuantity = 0;

        Object.values(allCartItems).map(item => {
            cartQuantity += item.quantity
        })

        return cartQuantity
    };

    const cartItemDiv = () => {

        return Object.values(allCartItems).map(item => {
            const product = allProducts[item.productId];

            if (!product) {
                return null
            }

            return(

                <div key={item.id}>
                    <div className='cart-item-div'>

                        <div className='cart-item-image-section'>
                            <img className='cart-item-image' src={`${product?.photoUrl}`} alt={product?.name || 'Cart item'} />
                        </div>

                        <div className='cart-item-information'>
                            <div>
                                <h2 className='cart-item-header'>{product.name}</h2>
                            </div>

                            <div className='cart-item-buttons-div'>

                                <select className='quantity-dropdown' onChange={(e) => updateQuantityHandler(e, item)}>
                                    <option value="">Qty: {item.quantity}</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                </select>

                                <div className='separator-between-quantity-delete-buttons'></div>

                                <span className='delete-cart-item-button' onClick={() => deleteItemHandler(item)}>Delete</span>

                            </div>
                        
                        </div>

                        <div className='cart-item-price-div'>
                            <p className='cart-item-price-paragraph'>${product.price}</p>
                        </div>

                    </div>

                    <div className='division-between-sections'></div>

                </div>

            );
        });
    };

    return (
        <>
            <Navigation />
            <div id='cart-body'>
                <div id='main-cart-block'>

                    <div id='shopping-cart-div'>

                        <h2 id='shopping-header'>Shopping Cart</h2>
                        <p id='price-paragraph-in-shopping-cart-div'>Price</p>
                        <div className='division-between-sections'></div>

                        {cartItemDiv()}

                    </div>

                    <div id='checkout-section'>
                        <h2 id='checkout-text-header'>Subtotal ({cartQuantity()} items):<span id='cart-item-price-sum'> ${priceSum()}</span></h2>
                        <input id='proceed-to-checkout-button' type='submit' value={'Proceed to checkout'} />
                    </div>

                </div>
            </div>
        </>
    )

}

export default Cart;