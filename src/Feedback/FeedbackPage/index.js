import React from 'react';
import PageHeader from '../../App/PageHeader/index';
import FeedbackList from '../FeedbackList';

class FeedbackPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialList: [],
			currentList: []
		};
		this.possibleScores = ['unacceptable','below average', 'good', 'excellent'];
		this.updateSearch = this.debounce(this.updateCurrentList, 500);
	}

	render() {
		return(
			<div class="feedback-page">
				<PageHeader class="pageHeader" searchValue={this.updateSearch.bind(this)}/>
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
	}

	setInitialLists(list) {
		this.setState({
			initialList: list,
			currentList: list
		});
	}

	matchesDate(date, value) {
		return ('' + date.toLowerCase()).indexOf(value.toLowerCase()) !== -1;
	}

	matchesScore(score, value) {
		return this.possibleScores[score -1].indexOf(value.toLowerCase()) !== -1;
	}

	matchesMessage(message, value) {
		return message.toLowerCase().search(value.toLowerCase()) !== -1;
	}

	// move to Common Utils folder later
	debounce(func, wait, immediate) {
		let timeout;
		return function() {
			const context = this, args = arguments;
			const later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			const callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
}

export default FeedbackPage;
