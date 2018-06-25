import React from 'react';
import './styles.scss';

class RadioList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: null
		}
	}

	render() {
		const options = this.createRadioOptions();
		return (
			<div class="option-row">{options}</div>
		);
	}

	createRadioOptions() {
		let options = [];
		for (let [index, option] of this.props.options.entries()) {
			options.push(
				<span class="radios" key={index}>
					<div>{option}</div>
					<div class="radio-div">
						<input class="radio-input" type="radio" value={option}
							checked={this.state.selectedOption === option}
							onChange={this.handleOptionChange.bind(this)} />
					</div>
				</span>
			);
		}
		return options;
	}

	handleOptionChange(e) {
		console.log(e.target.value);
		this.props.value(e.target.value);
		this.setState({ selectedOption: e.target.value });
	}
}

export default RadioList;