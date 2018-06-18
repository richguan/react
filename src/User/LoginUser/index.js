import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toFeedbackPage: false,
			user: '',
			pass: ''
		};
	}

	render() {
		if (this.state.toFeedbackPage)
			return <Redirect to='/'/>;
		const canSubmit = !this.inputsEntered();

		return (
			<div>Login
				<div>
					<input type="text" placeholder="Username" value={this.state.user} onChange={(e) => this.setState({user: e.target.value})}/>
					<input type="text" placeholder="Password" value={this.state.pass} onChange={(e) => this.setState({pass: e.target.value})}/>
					<button disabled={canSubmit} onClick={this.handleLogin.bind(this)}>Login</button>
				</div>
				<div>
					<Link to='/NewUser'>New User? Register</Link>
				</div>
			</div>
		);
	}

	handleLogin(e) {
		// use field validation for required fields
		console.log(e);
		// On successful login
		this.setState({ toFeedbackPage: true })
	}

	handleFailedLogin() {
		// highlight input fields that are required
		alert('Combination of Username and Password not found'); // create toast instead of native windows alert
	}

	inputsEntered() {
		return this.state.user.length > 0 && this.state.pass.length > 0;
	}
}

export default LoginUser;