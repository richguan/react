import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackPage from '../FeedbackPage';
import LoginUser from '../LoginUser';
import NewUser from '../NewUser';
import PostFeedback from '../PostFeedback';

const Routes = () => (
	<main>
		<Switch>
			<Route exact path='/' component={FeedbackPage}/>
			<Route path='/Login' component={LoginUser}/>
			<Route path='/NewUser' component={NewUser}/>
			<Route path='/PostFeedback' component={PostFeedback}/>
		</Switch>
	</main>
);

export default Routes;