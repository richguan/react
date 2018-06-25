import React from 'react';
import FeedbackRow from '../FeedbackRow/index';
import './styles.scss';

class FeedbackList extends React.Component {
	constructor(props) {
		super(props);
		this.getFeedback();
	}

	render() {
		return (
			<div>
				<div class="header">
					<span class="score">Score</span>
					<span class="message">Review</span>
					<span class="date">Date</span>
				</div>
				<div>{this.props.currentList}</div>
			</div>
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
		let mockedFeedback = [];
		for (let i=0;i<10;i++) {
			const date = this.randomDate().toDateString(),
				score = Math.floor(Math.random() * (5 - 1) + 1),
				message = 'This is a mocked feedback';
			mockedFeedback.push(<FeedbackRow key={i} date={date} message={message} score={score}/>);
		}
		return mockedFeedback;
	}

	randomDate() {
		return new Date(new Date(2017, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2017, 0, 1).getTime()));
	}
}

export default FeedbackList;