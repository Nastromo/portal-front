import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';




export class Navigation extends Component {
    setActive = (element) => {
        const activeNavItem = document.getElementsByClassName('menu-active');
        activeNavItem[0].classList.remove(`menu-active`);
        element.classList.add(`menu-active`);
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case `/account/results`:
                this.setActive(this.pending);
                break;
            case `/account/products`:
                this.setActive(this.processing);
                break;
            default: break;
        }
    }

    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `results`:
                this.setActive(this.pending);
                break;
            case `products`:
                this.setActive(this.processing);
                break;
            default: break;
        }
    }

    handleExit = () => {
        localStorage.removeItem(`emprToken`);
        this.props.history.push(`/login`);
    }

    handleSettings = () => {
        this.props.history.push(`/account/settings`);
    }

    render() {
        return (
            <div className="white-back">
                <div className="main-nav">
                    <div className="main-categories">
                        <a className="logo-text" href="/account/main">Wellcom</a>
                        <Link
                            id="results"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            className="menu-active"
                            to="/account/results">My results</Link>
                        <Link
                            id="products"
                            onClick={this.handleClick}
                            innerRef={el => this.processing = el}
                            to="/account/products">Products</Link>
                    </div>

                    <div className="work-info">
                        <p>Wellcome:</p>
                        <p className="nav-te">{this.props.name}</p>
                        <p className="nav-te" onClick={this.handleSettings}>Settings</p>
                        <p className="nav-te" onClick={this.handleExit}>Log out</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: `Vlad`

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
