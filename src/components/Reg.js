import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { makeReg } from '../store/actions/Registration';
import { showNotification } from '../store/actions/Notification';




export class login extends Component {

    handleRegistration = async (e) => {
        e.preventDefault();
        if (this.pass.value === this.passConfirm.value) {
            if (this.email.value && this.pass.value) {
                this.props.makeReg(this.props.history, `/v1/registration`, {
                    email: this.email.value,
                    pass: this.pass.value
                });
            }
        } else {
            this.props.showNotification(`Password doesn't match`, `notification-show`);
        }
    }


    render() {
        return (
            <div className="flex-center-column">
                <h2 className="pat-marg">Patient Registration</h2>
                <p className="sub-title">Empire City Laboratories</p>

                <form className="signup-form" onSubmit={this.handleRegistration}>

                    <input
                        ref={el => this.email = el}
                        className="input-login"
                        type="text"
                        placeholder="Enter Your Email"
                        required="required"
                        autoComplete="username" />

                    <input
                        ref={el => this.pass = el}
                        className="input-login"
                        type="password"
                        placeholder="Enter Your Password"
                        required="required"
                        autoComplete="current-password" />

                    <input
                        ref={el => this.passConfirm = el}
                        className="input-login"
                        type="password"
                        placeholder="Confirm Password"
                        required="required"
                        autoComplete="current-password" />

                    <div className="main-btn-height">
                        <SubmitButton status={this.props.status} text="Create Account" />
                    </div>

                    <p className="text-center">© 2008-2019 Empire City Laboratories, Inc. All Rights Reserved. ECL and Empire City Laboratories are registered trademarks of Empire City Laboratories®, Inc.</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    status: state.loginSpinner
})

const mapDispatchToProps = (dispatch) => ({
    makeReg: (history, url, body) => dispatch(makeReg(history, url, body)),
    showNotification: (text, clazz) => dispatch(showNotification(text, clazz))
})

export default connect(mapStateToProps, mapDispatchToProps)(login)
