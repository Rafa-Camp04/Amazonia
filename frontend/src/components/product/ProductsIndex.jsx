import './ProductsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as productActions from '../../store/product';

function ProductsIndex() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.indexProducts());
    }, [dispatch]);

    const dollarOrCents = (dollarOrCents, item) => {
        let num = item.price.toString()
        const arr = num.split(".")

        if (dollarOrCents === "dollar") {
            return arr[0]
        } else if (dollarOrCents === "cents") {
            return arr[1]
        } else {
            return "please insert the string 'dollar' or 'cents'"
        }
    }

    const productsAll = useSelector(state => state.products);

    const productIndexItem = () => {
        return Object.values(productsAll).map(product => (
            <Link key={product.id} className='product-item-link' to={`/products/${product.id}`}>
                <div className="product-item-div">
                    <div id='item-image-section'>
                        <div className='out-image'>
                            <img className='product-image-show-page' src={`${product?.photoUrl}`} />
                        </div>
                    </div>

                    <div className='bottom-index-item-section'>
                        <h2 className='product-name-header-index'>{product.name}</h2>

                        <div className='price-block-index-page'>
                            <span id='dollar-sign'>$</span>
                            <p id='price-paragraph'>{dollarOrCents('dollar', product)}</p>
                            <p id='cents'>{dollarOrCents('cents', product)}</p>
                        </div>

                    </div>
                </div>
            </Link>    
        ));
    };

    return(
        <div className='product-index-body'>

            <form id='items-block'>
                <div id='carousel'>
                
                </div>

                {productIndexItem()}
            </form>
        </div>
    )

}

export default ProductsIndex;