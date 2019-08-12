import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { makePayment } from '../store/actions/MakePayment';




class CheckoutForm extends Component {
    pay = async () => {
        if (this.props.total > 0) {
            this.props.makePayment(this.props.stripe);
        }
    }

    render() {
        return (
            <div className="checkout">
                <p>Card credentials</p>
                <div className="center-vert">
                    <CardElement className="strp" />
                </div>

                <button onClick={this.pay} className="pay-btn" type="submit">
                    <div className={this.props.status ? `loadding` : `not-loadding`}>
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p className={this.props.status ? `hide-text` : `show-text`}>PAY</p>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    total: 295 * state.gwmValue + 345 * state.ndValue + 255 * state.vdValue + 195 * state.idefValue + 150 * state.vaValue + 150 * state.b12Value,
    status: state.spinnerStatus,
    userId: state.user.userId,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    amount: state.testsPrice,
    testTitle: state.dropdownOption.products,
    price: state.testsPrice,
    quantity: state.testQty,
})

const mapDispatchToProps = dispatch => ({
    makePayment: (token) => dispatch(makePayment(token))
})


export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CheckoutForm))

