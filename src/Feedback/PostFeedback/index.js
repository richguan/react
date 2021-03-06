import React from 'react';
import RadioList from '../../App/RadioList/index';
import { Redirect } from 'react-router-dom';
import './styles.scss';

class PostFeedback extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			score: null,
			messageInput: '',
			toFeedbackPage: false
		};
	}

	render() {
		if (this.state.toFeedbackPage)
			return <Redirect to='/'/>;

		const options = this.getRadioOptions(),
			canSubmit = !this.inputsEntered();

		return (
			<div>
				PostFeedback
				<div class="container">
					<RadioList value={this.updateScore.bind(this)} options={options}/>
					<textarea class="text-message" value={this.state.messageInput} onChange={(e) => this.setState({messageInput: e.target.value})}/>
					<button class="submit-button" disabled={canSubmit} onClick={this.handleSubmit.bind(this)}>Submit</button>
				</div>
			</div>
		);
	}

	// Make server call to Submit
	handleSubmit() {
		console.log('Submitting: ' + this.state.messageInput + ', Score: ' + this.state.score);
		// After successful post, redirect back to feedback page
		this.setState({ toFeedbackPage: true });
	}

	getRadioOptions() {
		return ['Unacceptable','Below Average', 'Good', 'Excellent']
	}

	updateScore(value) {
		this.setState({ score: value });
	}

	inputsEntered() {
		return this.state.score !== null && this.state.messageInput.length > 0;
	}
}

export default PostFeedback;