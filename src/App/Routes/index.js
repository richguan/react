import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackPage from '../../Feedback/FeedbackPage/index';
import LoginUser from '../../User/LoginUser/index';
import NewUser from '../../User/NewUser/index';
import PostFeedback from '../../Feedback/PostFeedback/index';

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