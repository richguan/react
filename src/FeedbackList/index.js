import React from 'react';
import FeedbackRow from '../FeedbackRow'

class FeedbackList extends React.Component {
	constructor(props) {
		super(props);
		this.getFeedback();
	}

	render() {
		return (
			<div>{this.props.currentList}</div>
		);
	}

	// Retrieves feedback list from server
	getFeedback() {
		console.log('Retrieving feedback');
		const feedbackList = this.createMockFeedback();
		this.props.initialList(feedbackList);
		return feedbackList;
	}

	createMockFeedback() {
		let mockedFeedback = [],
			counter = 0;
		for (let i=0;i<10;i++) {
			const date = counter++,
				score = Math.floor(Math.random() * (5 - 1) + 1),
				message = 'This is a mocked feedback';
			mockedFeedback.push(<FeedbackRow key={i} date={date} message={message} score={score}/>);
		}
		return mockedFeedback;
	}
}

export default FeedbackList;