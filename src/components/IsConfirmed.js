import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../img/logo.png';



export class IsConfirmed extends Component {

    render() {
        return (
            <div className="center">
                <div className="cen-receipt flex column ju-center al-center">
                <img className="logo-m" src={logo} alt="" />
                    <h2>Confirm Registration</h2>
                    <p>Please, go to your email box and confirm registration.</p>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(IsConfirmed)
