import React from 'react';
import { Link } from 'react-router-dom';

const inputs = (
	<div>Login
		<input type="text">Username</input>
		<input type="text">Password</input>
	</div>
);

const LoginUser = () => (
	<div>Login
		<div><Link to='/NewUser'>New User? Register</Link></div>
	</div>

);

export default LoginUser;