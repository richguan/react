import React from 'react';

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
			<div>{options}</div>
		);
	}

	createRadioOptions() {
		let options = [];
		for (let [index, option] of this.props.options.entries()) {
			options.push(
				<div key={index}>
					<span>
						{option}
						<input type="radio" value={option}
							checked={this.state.selectedOption === option}
							onChange={this.handleOptionChange.bind(this)} />
					</span>
				</div>
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