import React, { Component } from 'react';
import { connect } from 'react-redux';




export class SubmitButton extends Component {

    showButton = (css) => {
        return (
            <button onClick={this.props.onClick} className="green-btn" type="submit">
                <div className={css}>
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <p className={`not-loadding` === css ? `show-text` : `hide-text`}>{this.props.text}</p>
            </button>
        )
    }

    render() {
        if (this.props.status) return this.showButton(`loadding`);
        else return this.showButton(`not-loadding`);
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
