import './Search.css';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as productActions from '../../store/product';

function Search() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.indexProducts());
    }, [dispatch])

    const allProducts = useSelector(state => state.products)

    const itemDiv = () => {

        return Object.values(allProducts).map(product => {

            if (!product) {
                return null
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
                            <div className='cart-item-delivery-information'>
                                <span className='in-stock'>In Stock</span>
                                <p className='cart-item-price-paragraph'>${product.price}</p>
                                <p className='cart-item-delivery-information-paragraph'>Same-Day</p>
                                <p className='cart-item-delivery-information-paragraph'>
                                    FREE delivery 
                                    <span className='cart-item-delivery-information-bold-text'> Tomorrow 2 PM - 6 PM</span>
                                </p>
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