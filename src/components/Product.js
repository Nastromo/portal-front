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
