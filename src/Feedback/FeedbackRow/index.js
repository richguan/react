import React from 'react';

class FeedbackRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span>{this.props.date}</span>
				<span>{this.props.message}</span>
				<span>{this.props.score}</span>
			</div>
		);
	}
}

export default FeedbackRow;