import React from 'react';
import './styles.scss';

class FeedbackRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parsedScore: this.getScore()
		};
	}

	render() {
		return (
			<div class="row">
				<span class="score">{this.state.parsedScore}</span>
				<span class="message">{this.props.message}</span>
				<span class="date">{this.props.date}</span>
			</div>
		);
	}

	getScore() {
		switch (this.props.score) {
			case 1:
				return 'Unacceptable';
			case 2:
				return 'Below Average';
			case 3:
				return 'Good';
			case 4:
				return 'Excellent';
		}
	}
}

export default FeedbackRow;