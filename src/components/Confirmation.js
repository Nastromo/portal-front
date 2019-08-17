import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../img/logo.png';
import { saveUserInfo, changeDob, handleDelete } from '../store/actions/User';



export class Confirmation extends Component {
    onClick = () => {
        if (this.firstname.value && this.lastname.value && this.props.dob) {
            this.props.saveUserInfo(this.firstname.value, this.lastname.value, this.props.dob);
        }
    }

    render() {
        return (
            <div className="center">
                <div className="cen-receipt flex column ju-center al-center">
                    <img className="logo-m" src={logo} alt="" />
                    <h2>Thank you for Confirmation!</h2>
                    <h4>Please add you info to continue:</h4>

                    <div className="width300">
                        <input
                            ref={el => this.firstname = el}
                            className="input-login"
                            placeholder="Your First Name"
                            required="required" />

                        <input
                            ref={el => this.lastname = el}
                            className="input-login"
                            placeholder="Your Last Name"
                            required="required" />

                        <input
                            value={this.props.dob}
                            className="input-login"
                            placeholder="Your date of birth"
                            required="required"
                            onKeyDown={this.props.handleDelete}
                            onChange={this.props.changeDob} />

                        <div className="main-btn-height">
                            <button onClick={this.onClick} className="green-btn">Continue</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dob: state.dob
})

const mapDispatchToProps = dispatch => ({
    saveUserInfo: (firstname, lastname, dob) => dispatch(saveUserInfo(firstname, lastname, dob)),
    changeDob: (e) => dispatch(changeDob(e)),
    handleDelete: (e) => dispatch(handleDelete(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
