
import { Component } from "react";
import AllProductsSection from "../AllProductsSection";
import PrimeDealsSection from '../PrimeDealsSection';

import "./index.css"

class Products extends Component {

    render() {
        return(
            <div>
                <h1> Products Component </h1>
                <PrimeDealsSection />
                <AllProductsSection />
            </div>
        );
    }
}

export default Products;