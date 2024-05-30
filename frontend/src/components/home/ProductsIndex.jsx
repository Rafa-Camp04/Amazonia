import './ProductsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as productActions from '../../store/product';

function ProductsIndex() {
    const dispatch = useDispatch();



    const productIndexItem = () => {
        

        return(
            <div>
            </div>
        )
    }

    return(
        <div className='product-index-body'>
            <div className='items-block'>
                {productIndexItem()}
            </div>
        </div>
    )

}

export default ProductsIndex;