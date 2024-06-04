import './Cart.css'
import Navigation from '../navigation/Navigation';

function Cart() {

    return (
        <>
            <Navigation />
            <div id='cart-body'>
                <div id='main-cart-block'>

                    <div id='shopping-cart-div'>

                        <h2 id='shopping-header'>Shopping Cart</h2>
                        <p id='price-paragraph-in-shopping-cart-div'>Price</p>
                        <div className='division-between-sections'></div>

                        <div className='cart-item-div'>
                        </div>
                        

                    </div>

                    <div id='checkout-section'>
                        <h2 id='checkout-text-header'>Subtotal (2 items):</h2>
                        <input id='proceed-to-checkout-button' type='submit' value={'Proceed to checkout'} />
                    </div>

                </div>
            </div>
        </>
    )

}

export default Cart;