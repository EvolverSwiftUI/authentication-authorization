import { Component } from "react";
import ProductCard from './component/ProductCard';
import Cookies from 'js-cookie';

class AllProductsSection extends Component {
    state = {
        productsList: [],
    }

    renderProductsList = () => {
        const {productsList} = this.state;
        console.log(productsList);

        return (
            <div>
                {productsList.map(product => (
                    <ProductCard productData={product} />
                ))}
            </div>
        );
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        const apiUrl = "https://apis.ccbp.in/products";
        const jwtToken = Cookies.get("jwt_token");
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(apiUrl, options);
        const json = await response.json()
        console.log(json);
        if (response.ok === true) {
            const fetchedData = await response.json()
            const updatedData = fetchedData.map(product => ({
                title: product.title,
                brand: product.brand,
                price: product.price,
                id: product.id,
                imageUrl: product.image_url,
                rating: product.rating,
            }))
            this.setState({ productsList: updatedData })    
        }
    }

    render() { return <>{this.renderProductsList}</> }
}

export default AllProductsSection;