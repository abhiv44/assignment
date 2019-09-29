import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import userLogin from '../pages/login'
import UserDashBoard from '../pages/dashBoard'
const Main = () => (

    <Router>
        <Switch>
            <Route path='/' exact component={userLogin} />
            <Route path='/gallery' exact component={UserDashBoard} />
        </Switch>
    </Router>
)

export default Main;