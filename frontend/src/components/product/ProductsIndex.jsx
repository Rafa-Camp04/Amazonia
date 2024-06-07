// import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as productActions from '../../store/product';
// import Carousel from 'react-bootstrap/Carousel';
// import image01 from '../../../media/carousel-images/carousel-1.jpg';
// import image02 from '../../../media/carousel-images/carousel-2.jpg';
// import image03 from '../../../media/carousel-images/carousel-3.jpg';
// import image04 from '../../../media/carousel-images/carousel-4.jpg';
// import image05 from '../../../media/carousel-images/carousel-5.jpg';
// import image06 from '../../../media/carousel-images/carousel-6.jpg';
// import image07 from '../../../media/carousel-images/carousel-7.jpg';

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

    // const indexCarousel = () => {
    //     return (
    //       <Carousel id='carousel'>
    //         <Carousel.Item>
    //             <div className='carousel-img-div'>
    //                 <img className='carousel-img' src={image01} alt="First slide" />
    //             </div>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img className='carousel-img' src={image02} alt="Second slide" />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img className='carousel-img' src={image03} alt="Third slide" />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img className='carousel-img' src={image04} alt="Forth slide" />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img className='carousel-img' src={image05} alt="Fifth slide" />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img className='carousel-img' src={image06} alt="Sixth slide" />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img className='carousel-img' src={image07} alt="Seventh slide" />
    //         </Carousel.Item>
    //       </Carousel>
    //     );
    //   }

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
        <div id='product-index-body'>

            <form id='items-block'>

                {/* <div id='carousel-block'>
                    {indexCarousel()}
                </div> */}

                {productIndexItem()}
            </form>
        </div>
    )

}

export default ProductsIndex;