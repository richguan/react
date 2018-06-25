import React from 'react';
import './styles.scss';

class Search extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input class="search-input" type="text" placeholder="Search" onChange={this.updateSearchValue.bind(this)}/>
			</div>
		);
	}

	updateSearchValue(e) {
		this.props.searchValue(e.target.value);
	}
}

export default Search;