import './ProductShow.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as productActions from '../../store/product';
import Navigation from '../navigation/Navigation';
import { useParams, useNavigate } from 'react-router-dom';
import * as cartItemsActions from '../../store/cart';

function ProductShow() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const productId = parseInt(id, 10)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(productActions.showItem(productId));
    }, [dispatch, productId]);

    const products = useSelector(state => state.products);
    const product = products[productId]

    if (!product) {
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(cartItemsActions.createCartItem(product));
        navigate('/order-placed')
    }

    const dollarOrCents = (dollarOrCents) => {
        let num = product.price.toString()
        const arr = num.split(".")

        if (dollarOrCents === "dollar") {
            return arr[0]
        } else if (dollarOrCents === "cents") {
            return arr[1]
        } else {
            return "please insert the string 'dollar' or 'cents'"
        }
    }

    return(
        <div id='product-show-page-body'>
            <Navigation />
            <div id='main-block'>
                <div id='left-block'>
                    <div id='image-section'>
                        <img className='product-image-show-page' src={`${product?.photoUrl}`} />
                    </div>
                </div>

                <div id='center-block'>
                    <div id='name-section'>
                        <h3 id='item-name-h3'>{product.name}</h3>
                    </div>

                    <div className='division-between-sections'></div>

                    <div id='price-section'>

                        <div id='price-block'>
                            <span id='dollar-sign'>$</span>
                            <p id='price-paragraph'>{dollarOrCents('dollar')}</p>
                            <p id='cents'>{dollarOrCents('cents')}</p>
                        </div>

                        <p id='shipping-paragraph'>Get <span className='a-text-bold'>Fast, Free Shipping</span> with <span className='fake-link-blue'>Amazonia Prime</span></p>
                        <p id='free-returns' className='fake-link-blue'>FREE returns</p>
                    </div>

                    <div className='division-between-sections'></div>

                    <div id='description-section'>
                        <p>{product.description}</p>
                    </div>

                </div>

                <div id='right-block'>
                    <div id='add-to-cart-section'>

                        <div id='top-add-to-cart-div'>
                            <span className='a-text-bold'>Buy New:</span>

                            <div id='price-block'>
                                <span id='dollar-sign'>$</span>
                                <p id='price-paragraph'>{dollarOrCents('dollar')}</p>
                                <p id='cents'>{dollarOrCents('cents')}</p>
                            </div>
                        </div>

                        <p id='shipping-paragraph'>Get <span className='a-text-bold'>Fast, Free Shipping</span> with <span className='fake-link-blue'>Amazonia Prime</span></p>
                        <p id='free-returns' className='fake-link-blue'>FREE returns</p>
                        <span className='in-stock'>In Stock</span>

                        <input id='add-to-cart-button' type='submit' value={'Add to Cart'} onClick={handleSubmit} />

                    </div>
                </div>

            </div>

        </div>
    )

}

export default ProductShow;