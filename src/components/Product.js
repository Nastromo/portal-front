import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { calculateTestQuantity } from '../store/actions/TestQuantity';



export class Product extends Component {
    constructor(props) {
        super(props);
        this.products = [`Genetic Weight Management`, `Nutritional Deficiencies`];
    }

    handleQty = (e) => {
        this.props.calculateTestQuantity(e.target.value);
    }

    render() {
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
                            onChange={this.handleQty}
                            type="number" />
                        <p className="price">{`$${this.props.price}`}</p>
                    </div>
                    <div className="full-w"><p>Pay with Credit Card</p></div>

                    <div className="wi-card">
                        <div>
                            <p>Card number</p>
                            <input className="simple-input quantity fir-pa" type="number" />
                        </div>
                        <div>
                            <p>Exp. date</p>
                            <input className="simple-input quantity" type="number" />
                        </div>
                        <div>
                            <p>CVV</p>
                            <input className="simple-input quantity" type="number" />
                        </div>
                    </div>
                    <div className="street">
                        <p>Address</p>
                        <input className="simple-input quantity fir-pa" placeholder="street" type="text" />
                    </div>
                    <div className="wi-card">
                        <div>
                            <p>City</p>
                            <input className="simple-input quantity fir-pa" placeholder="city" type="text" />
                        </div>
                        <div>
                            <p>State</p>
                            <input className="simple-input quantity" type="text" />
                        </div>
                        <div>
                            <p>ZIP</p>
                            <input className="simple-input quantity" type="number" />
                        </div>
                    </div>
                    <div className="street">
                        <p className="title-su">Plan Summary</p>
                        <div className="summ-bot">
                            <p>{this.props.productOption ? this.props.productOption : `Not chosen`}</p>
                            <p>{`$${this.props.price}`}</p>
                        </div>
                    </div>
                    <button className="pay-btn">PAY</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productOption: state.dropdownOption.products,
    dropdownStatus: state.dropdownStatus.products,
    price: state.testsPrice,
})

const mapDispatchToProps = dispatch => ({
    calculateTestQuantity: (number) => dispatch(calculateTestQuantity(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
