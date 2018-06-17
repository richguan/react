import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';

//Add Logout button here

const PageHeader = () => (
	<div>
		<div><Link to='/PostFeedback'>Post Feedback</Link></div>
		<div>Logout</div>
		<Search/>
	</div>
);

export default PageHeader;