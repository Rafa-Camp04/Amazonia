import './Search.css';
import Navigation from '../navigation/Navigation';

function Search() {

    return(
        <>
            <Navigation />

            <div id='search-under-nav-box'></div>

            <div id='search-body'>
                
                {/* <div id='search-left-box'>
                </div> */}

                <div id='search-central-box'>
                    <div id='search-ad-box'></div>

                    <span id='search-header-results'>Results</span>
                    <span id='search-under-header'>Check each product page for other buying options.</span>

                </div>


            </div>
        </>
    )
}

export default Search;