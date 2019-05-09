import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import Main from './Main';
import Navigation from './Navigation';





export class PrivateRoute extends Component {


    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/account/main" component={Main} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

