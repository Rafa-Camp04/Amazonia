import './Search.css';
import Navigation from '../navigation/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as productActions from '../../store/product';
import * as cartItemsActions from '../../store/cart';

function Search() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(productActions.searchProducts());
    }, [dispatch])

    const searchResults = useSelector(state => state.searchResults)

    if (searchResults === undefined) {
        return (
            <p>nope</p>
        )
    }

    const itemDiv = () => {

        return Object.values(searchResults).map(product => {

            if (!product) {
                return null
            }

            const handleSubmit = (e) => {
                e.preventDefault();
                dispatch(cartItemsActions.createCartItem(product));
        
                if (sessionUser === null) {
                    navigate('/login')
                } else {
                    navigate('/')
                }
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

                <div key={product.id}>

                    <div className='search-item-div'>
                        <div className='search-item-image-section'>
                            <Link className='cart-item-header-link' to={`/products/${product.id}`}>
                                <img className='search-item-image' src={`${product?.photoUrl}`} alt={product?.name || 'Cart item'} />
                            </Link>
                        </div>
                        <div className='search-item-information'>
                            <div>
                                <Link className='cart-item-header-link' to={`/products/${product.id}`}>
                                    <h2 className='cart-item-header'>{product.name}</h2>
                                </Link>
                            </div>
                            <div className='search-item-delivery-information'>
                                <div id='price-block'>
                                    <span id='dollar-sign'>$</span>
                                    <p id='price-paragraph'>{dollarOrCents('dollar')}</p>
                                    <p id='cents'>{dollarOrCents('cents')}</p>
                                </div>
                                <p className='search-item-delivery-information-paragraph'>Same-Day</p>
                                <p className='cart-item-delivery-information-paragraph'>
                                    FREE delivery 
                                    <span className='cart-item-delivery-information-bold-text'> Tomorrow 2 PM - 6 PM</span>
                                </p>

                                <input className='search-add-to-cart-button' type='submit' value={'Add to cart'} onClick={handleSubmit} />

                            </div>
                        </div>
                    </div>

                </div>

            );
        });
    };

    return(
        <>
            <Navigation />

            <div id='search-under-nav-box'></div>

            <div id='search-body'>
            

                <div id='search-central-box'>
                    <div id='search-ad-box'></div>

                    <span id='search-header-results'>Results</span>
                    <span id='search-under-header'>Check each product page for other buying options.</span>

                    {itemDiv()}

                </div>

            </div>
        </>
    )
}

export default Search;