import React from 'react';
import FeedbackRow from '../FeedbackRow'

class FeedbackList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const someFeedback = this.getFeedback();
		return (
			<div>{someFeedback}</div>
		);
	}

	// Retrieves feedback list from server
	getFeedback() {
		console.log('Retrieving feedback');
		return this.mockFeedback();
	}

	mockFeedback() {
		let someFeedback = [],
			counter = 0;
		for (let i=0;i<10;i++) {
			const date = counter++,
				score = Math.floor(Math.random() * Math.floor(4)),
				message = 'This is a mocked feedback';
			someFeedback.push(<FeedbackRow key={i} date={date} message={message} score={score}/>);
		}
		return someFeedback;
	}
}

export default FeedbackList;