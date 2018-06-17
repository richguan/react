import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackPage from '../FeedbackPage'
import LoginUser from '../LoginUser'
import NewUser from '../NewUser'

const Routes = () => (
	<main>
		<Switch>
			<Route exact path='/' component={FeedbackPage}/>
			<Route path='/Login' component={LoginUser}/>
			<Route path='/NewUser' component={NewUser}/>
		</Switch>
	</main>
);

export default Routes;