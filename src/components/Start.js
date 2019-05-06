import React, { Component } from 'react';
import { connect } from 'react-redux';
import microscope from '../img/microscope.svg';
import { makeLogin } from '../store/actions/Login';




export class login extends Component {
    handleLogin = () => {
        window.location = `/login`
    }

    render() {
        return (
            <div className="flex-center-column">
                <img className="micro" src={microscope} alt="" />
                <h2>Welcome</h2>
                <p className="sub-title">Empire City Laboratories</p>
                <p className="sub-title">Patient Portal</p>

                <button onClick={this.handleCreate} className="green-create">Create Account</button>
                <button onClick={this.handleLogin} className="green-login">Login</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    status: state.loginSpinner
})

const mapDispatchToProps = (dispatch) => ({
    makeLogin: (history, url, body) => dispatch(makeLogin(history, url, body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(login)
