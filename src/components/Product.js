import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { calculateTestQuantity } from '../store/actions/TestQuantity';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { setAddress, setCity, setState, setZip } from '../store/actions/Address';



export class Product extends Component {
    constructor(props) {
        super(props);
        this.products = [`Genetic Weight Management`, `Nutritional Deficiencies`];
    }

    handleQty = (e) => {
        this.props.calculateTestQuantity(e.target.value);
    }

    handleAddress = (e) => {
        this.props.setAddress(e.target.value);
    }

    handleCity = (e) => {
        this.props.setCity(e.target.value);
    }

    handleState = (e) => {
        this.props.setState(e.target.value);
    }

    handleZip = (e) => {
        this.props.setZip(e.target.value);
    }

    render() {
        if (this.props.ok) {
            return (
                <div className="center-all">
                    <h1 className="mar-dop">Thank you!</h1>
                    <h2>Your payment is successful</h2>
                </div>
            )
        }

        if (this.props.error) {
            return (
                <div className="center-all">
                    <h1 className="mar-dop">Failure!</h1>
                </div>
            )
        }
        
        return (
            <div className="flex-ce">
                <div className="form-pay">
                    <p className="pay-title">Please Select Our Tests</p>
                    <div className="prod-sele">
                        <div className="products-s">
                            <DropDown
                                option={this.props.productOption}
                                status={this.props.dropdownStatus}
                                menu={this.products}
                                id="products" />
                        </div>

                        <p className="qty">QTY:</p>
                        <input
                            className="simple-input quantity"
                            value={this.props.qty}
                            onChange={this.handleQty}
                            type="number" />
                        <p className="price">{`$${this.props.price}`}</p>
                    </div>
                    <div className="full-w"><p>Pay with Credit Card</p></div>

                    <div className="street">
                        <p>Address</p>
                        <input
                            className="simple-input quantity fir-pa"
                            placeholder="street"
                            value={this.props.address}
                            onChange={this.handleAddress}
                            type="text" />
                    </div>
                    <div className="wi-card">
                        <div>
                            <p>City</p>
                            <input
                                className="simple-input quantity fir-pa"
                                placeholder="city"
                                value={this.props.city}
                                onChange={this.handleCity}
                                type="text" />
                        </div>
                        <div>
                            <p>State</p>
                            <input
                                className="simple-input quantity"
                                value={this.props.state}
                                onChange={this.handleState}
                                type="text" />
                        </div>
                        <div>
                            <p>ZIP</p>
                            <input
                                className="simple-input quantity"
                                value={this.props.zip}
                                onChange={this.handleZip}
                                type="number" />
                        </div>
                    </div>
                    <div className="street">
                        <p className="title-su">Plan Summary</p>
                        <div className="summ-bot">
                            <p>{this.props.productOption ? this.props.productOption : `Not chosen`}</p>
                            <p>{`$${this.props.price}`}</p>
                        </div>
                    </div>
                    <Elements>
                        <CheckoutForm address={this.address} />
                    </Elements>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    productOption: state.dropdownOption.products,
    dropdownStatus: state.dropdownStatus.products,
    price: state.testsPrice,
    qty: state.testQty,
    ok: state.payment,
    error: state.paymentError
})

const mapDispatchToProps = dispatch => ({
    calculateTestQuantity: (number) => dispatch(calculateTestQuantity(number)),
    setAddress: (text) => dispatch(setAddress(text)),
    setCity: (text) => dispatch(setCity(text)),
    setState: (text) => dispatch(setState(text)),
    setZip: (text) => dispatch(setZip(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
