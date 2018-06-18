import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Search" onChange={this.updateSearchValue.bind(this)}/>
			</div>
		);
	}

	updateSearchValue(e) {
		this.props.searchValue(e.target.value);
	}
}

export default Search;