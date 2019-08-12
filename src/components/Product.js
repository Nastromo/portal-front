import React, { Component } from 'react';
import { connect } from 'react-redux';
// import DropDown from './DropDown';
import { calculateTestQuantity } from '../store/actions/TestQuantity';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { setAddress, setCity, setState, setZip } from '../store/actions/Address';
import Receipt from './Receipt';
import TestsChoose from './TestsChoose';




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
                <div className="center-rec">
                    <Receipt />
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
            <div className="flex ju-center">
                <div className="width400">
                    <p className="pay-title">Testing Menu</p>
                    <div className="optn">Option #1</div>
                    <p className="bold pad15-side">TEST TITLE</p>
                    <p className="small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptate quidem a autem, id provident, omnis, vitae nobis vel itaque quod fuga totam minus velit sed! Molestias amet odit ullam.</p>

                    <div className="optn mar-t-40">Option #2</div>
                    <p className="bold pad15-side">TEST TITLE</p>
                    <p className="small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptate quidem a autem, id provident, omnis, vitae nobis vel itaque quod fuga totam minus velit sed! Molestias amet odit ullam.</p>
                </div>
                <div className="flex-ce">
                    <div className="form-pay">
                        <p className="pay-title">Please Select Our Tests</p>
                        {/* <div className="prod-sele">
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
                    </div> */}


                        <TestsChoose />


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
                                <p>TOTAL SUM:</p>
                                <p className="bold">{`$${this.props.total}`}</p>
                            </div>
                        </div>
                        <Elements>
                            <CheckoutForm address={this.address} />
                        </Elements>
                    </div>
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
    error: state.paymentError,
    total: 295 * state.gwmValue + 345 * state.ndValue + 255 * state.vdValue + 195 * state.idefValue + 150 * state.vaValue + 150 * state.b12Value,
})

const mapDispatchToProps = dispatch => ({
    calculateTestQuantity: (number) => dispatch(calculateTestQuantity(number)),
    setAddress: (text) => dispatch(setAddress(text)),
    setCity: (text) => dispatch(setCity(text)),
    setState: (text) => dispatch(setState(text)),
    setZip: (text) => dispatch(setZip(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
