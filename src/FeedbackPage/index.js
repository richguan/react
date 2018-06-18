import React from 'react';
import PageHeader from '../PageHeader';
import FeedbackList from '../FeedbackList';

class FeedbackPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialList: [],
			currentList: []
		};
		this.possibleScores = ['Unacceptable','Below Average', 'Good', 'Excellent'];
	}

	render() {
		return(
			<div>
				<PageHeader searchValue={this.updateCurrentList.bind(this)}/>
				<FeedbackList initialList={this.setInitialLists.bind(this)} currentList={this.state.currentList}/>
			</div>
		);
	}

	updateCurrentList(value) {
		let updatedList = this.state.initialList;
		updatedList = updatedList.filter((feedbackRow) => {
			const feedback = feedbackRow.props;
			// Check if user search matches feedback date, score, or message
			return this.matchesDate(feedback.date, value) || this.matchesScore(feedback.score, value) || this.matchesMessage(feedback.message, value);
		});
		this.setState({ currentList: updatedList });
		console.log(this.state.currentList);
	}

	setInitialLists(list) {
		this.setState({
			initialList: list,
			currentList: list
		});
	}

	matchesDate(date, value) {
		return ('' + date).indexOf(value) !== -1;
	}

	matchesScore(score, value) {
		return score === this.possibleScores.indexOf(value) + 1;
	}

	matchesMessage(message, value) {
		return message.toLowerCase().search(value.toLowerCase()) !== -1;
	}
}

export default FeedbackPage;
