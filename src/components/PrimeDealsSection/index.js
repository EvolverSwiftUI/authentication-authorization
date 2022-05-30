import { Component } from "react";

const apiStatusConstants = {
    initial: "INITIAL",
    succcess: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
}

class PrimeDealsSection extends Component {
    state = {
        primeDeals: [],
        apiStatus: apiStatusConstants.initial,
    }
    render() {
        return <h1>Prime Deals Section</h1>
    }
}

export default PrimeDealsSection;