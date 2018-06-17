import React from 'react';
import RadioList from '../RadioList';
import { Redirect } from 'react-router-dom';

class PostFeedback extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			score: null,
			inputValue: '',
			toFeedbackPage: false
		};
	}

	render() {
		if (this.state.toFeedbackPage)
			return <Redirect to='/'/>;

		const options = this.getRadioOptions();

		return (
			<div>
				PostFeedback
				<div>
					<RadioList value={this.updateScore.bind(this)} options={options}/>
					<textarea value={this.state.inputValue} onChange={e => this.updateInputValue(e)}/>
					<button onClick={this.handleSubmit.bind(this)}>Submit</button>
				</div>
			</div>
		);
	}

	// Make server call to Submit
	handleSubmit() {
		console.log('Submitting: ' + this.state.inputValue + ', Score: ' + this.state.score);
		// After successful post, redirect back to feedback page
		this.setState({
			toFeedbackPage: true
		});
	}

	updateInputValue(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	getRadioOptions() {
		return ['Unacceptable','Below Average', 'Good', 'Excellent']
	}

	updateScore(value) {
		this.setState({
			score: value
		})
	}
}

export default PostFeedback;