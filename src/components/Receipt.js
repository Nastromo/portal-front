import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../img/logo.png';
import moment from 'moment';



export class Receipt extends Component {

    print = () => {
        window.print();
    }

    render() {
        return (
            <div className="cen-receipt">
                <div className="toper">
                    <p className="big-rece">RECEIPT</p>
                    <img className="logo-m" src={logo} alt="" />
                </div>
                <div className="toper marg-rr">
                    <div>
                        <p className="str-b">BILL TO:</p>
                        <p className="sm-te">{this.props.email}</p>
                        <p className="sm-te">{`${this.props.address}, ${this.props.city}, ${this.props.zip}`}</p>
                    </div>
                    <div>
                        <div className="toper">
                            <p className="str-b">RECEIPT #:</p>
                            <p className="sm-te">{this.props.id}</p>
                        </div>
                        <div className="toper">
                            <p className="str-b">{`RECEIPT DATE: ${moment(this.props.date).format(`MM/DD/YYYY h:mm a`)}`}</p>
                        </div>
                    </div>
                </div>

                <div className="tit-fl-pro">
                    <p className="qty-t">QTY</p>
                    <p className="desc-t">DESCRIPTION</p>
                    <p className="amn-t">AMOUNT</p>
                </div>

                <div className="tit-fl-dow">
                    <p className="qty-t">{this.props.qty}</p>
                    <p className="desc-t">{this.props.productOption}</p>
                    <p className="amn-t">{`$${this.props.price}`}</p>
                </div>

                <div className="left-tot">{`TOTAL: $${this.props.price}`}</div>
                <div className="dis-ri">
                    <button onClick={this.print} className="print-btn">PRINT</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.user.email,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    id: state.paymentData.id,
    date: state.paymentData.date,

    qty: state.testQty,
    productOption: state.dropdownOption.products,
    price: state.testsPrice,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt)
