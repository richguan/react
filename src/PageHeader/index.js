import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Search from '../Search';

class PageHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toLoginPage: false
		};
	}

	render() {
		if (this.state.toLoginPage)
			return <Redirect to='/Login'/>;

		return(
			<div>
				<div>
					<Link to='/PostFeedback'>Post Feedback</Link>
				</div>
				<div>
					<Search searchValue={this.updateSearchValue.bind(this)}/>
				</div>
				<div onClick={this.handleLogOut.bind(this)}>Logout</div>
			</div>
		);
	}

	updateSearchValue(value) {
		this.props.searchValue(value);
	}

	handleLogOut() {
		//logout user
		this.setState({ toLoginPage: true });
	}
}


export default PageHeader;