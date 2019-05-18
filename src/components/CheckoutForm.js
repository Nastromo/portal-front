import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { makePayment } from '../store/actions/MakePayment';




class CheckoutForm extends Component {
    pay = async () => {
        if (this.props.price && this.props.qty) {
            let { token } = await this.props.stripe.createToken({ name: `name` });
            const paymentData = {
                amount: this.props.amount * 100,
                token,
                testTitle: this.props.testTitle
            }
            this.props.makePayment(paymentData);
        }
    }

    render() {
        if (this.props.address) console.log(this.props.address.value)
        return (
            <div className="checkout">
                <p>Card credentials</p>
                <div className="center-vert">
                    <CardElement className="strp" />
                </div>
                <button onClick={this.pay} className="pay-btn">PAY</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // userId: state.user.userId,
    amount: state.testsPrice,
    testTitle: state.dropdownOption.products,
    price: state.testsPrice,
    qty: state.testQty,
})

const mapDispatchToProps = dispatch => ({
    makePayment: (token) => dispatch(makePayment(token))
})


export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CheckoutForm))

