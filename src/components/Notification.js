import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showNotification } from '../store/actions/Notification';



export class Notification extends Component {
    componentWillMount() {
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
    }

    handleClick = () => {
        this.props.showNotification(``, ``);
    }

    render() {
        return (
            <div className={this.props.css}>
                {this.props.text}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    text: state.notificationText,
    css: state.notificationCss
})

const mapDispatchToProps = (dispatch) => ({
    showNotification: (text, css) => dispatch(showNotification(text, css)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
