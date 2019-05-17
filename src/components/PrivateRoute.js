import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import Main from './Main';
import Navigation from './Navigation';
import Product from './Product';
import { StripeProvider } from 'react-stripe-elements';




export class PrivateRoute extends Component {


    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <StripeProvider apiKey="pk_test_QOzx3Av0qTEjt0e31wPG3aff00KTbteZxN">
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/account/main" component={Main} />
                        <Route exact path="/account/products" component={Product} />
                    </Switch>
                </div>
            </StripeProvider>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

