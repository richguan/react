import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NewUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toFeedbackPage: false,
			user: '',
			pass: '',
			confirmPass: ''
		}
	}

	render() {
		if (this.state.toFeedbackPage)
			return <Redirect to='/'/>;
		const canSubmit = !this.inputsEntered();

		return(
			<div>
				<div><input type="text" placeholder="Username" value={this.state.user} onChange={(e) => this.setState({user: e.target.value})}/></div>
				<div><input type="text" placeholder="Password" value={this.state.pass} onChange={(e) => this.setState({pass: e.target.value})}/></div>
				<div><input type="text" placeholder="Confirm Password" value={this.state.confirmPass} onChange={(e) => this.setState({confirmPass: e.target.value})}/></div>
				<button disabled={canSubmit} onClick={this.handleCreateAccount.bind(this)}>Create Account</button>
				<Link to="/Login">Back to Login</Link>
			</div>
		);
	}

	handleCreateAccount() {
		if (!this.passwordsMatch())
			return this.alertMismatchedPasswords();
		// On successful account creation
		this.setState({ toFeedbackPage: true });
	}

	alertMismatchedPasswords() {
		// Mark inputs with required
		alert('Passwords do not match'); //Use toast message instead of windows alert
	}

	passwordsMatch() {
		return this.state.pass === this.state.confirmPass;
	}

	inputsEntered() {
		return this.state.user.length > 0 && this.state.pass.length > 0 && this.state.confirmPass.length > 0;
	}
}

export default NewUser;
