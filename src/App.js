import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Reg from './components/Reg';
import Login from './components/Login';
import Start from './components/Start';
import PrivateRoute from './components/PrivateRoute';
import Notification from './components/Notification';
import Confirmation from './components/Confirmation';
import IsConfirmed from './components/IsConfirmed';




export class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Notification />
                    <Switch>
                        <Route exact path="/" component={Start} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Reg} />
                        <Route exact path="/is-confirmed" component={IsConfirmed} />
                        <Route path="/confirmation" component={Confirmation} />
                        <Route path="/account" component={PrivateRoute} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)


