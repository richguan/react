import React from 'react';
import { Redirect } from 'react-router-dom';
import Search from '../Search';
import './styles.scss';

class PageHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toLoginPage: false,
			toPostFeedback: false
		};
	}

	render() {
		if (this.state.toLoginPage)
			return <Redirect to='/Login'/>;
		if (this.state.toPostFeedback) {
			return <Redirect to='/PostFeedback'/>;
		}

		return(
			<div id="page-header">
				<span class="left-menu">
					<span class="app-name">Feedback</span>
					<span>
						<Search searchValue={this.updateSearchValue.bind(this)}/>
					</span>
				</span>
				<span class="right-menu">
					<span className="btn post" onClick={this.handlePost.bind(this)}>Post Feedback</span>
					<span class="btn logout" onClick={this.handleLogOut.bind(this)}>Logout</span>
				</span>
			</div>
		);
	}

	updateSearchValue(value) {
		this.props.searchValue(value);
	}

	handlePost() {
		//navigate to Post Feedback
		this.setState({ toPostFeedback: true});
	}

	handleLogOut() {
		//logout user
		this.setState({ toLoginPage: true });
	}
}


export default PageHeader;