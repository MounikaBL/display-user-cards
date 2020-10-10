import React from 'react';
import { connect } from 'react-redux'
import { getCount } from "./constants";
import CardContainer from "./components/card-container";
import Card from "./components/card";
import { userActions } from "./actions";
import { isEmpty, get, debounce } from 'lodash';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.callLoadUser = debounce(this.callLoadUser.bind(this), 5000);
	}

	componentDidMount() {
		let w = window.innerWidth;
		let count = getCount(w);
		count = count - 1;
		this.loadUsers(count);
	}

	componentDidUpdate() {
		this.callLoadUser(this.props);
	}

	callLoadUser = (props) => {
		if (isEmpty(get(props, "users", [])) || this.props.error) {
			let w = window.innerWidth;
			let count = getCount(w);
			count = count - 1;
			this.loadUsers(count);
		}
	}

	loadUsers = (count = getCount(window.innerWidth)) => {
		this.props.onChange(count);
	}

	render() {
		let { users, loading } = this.props;
		return (
			<div className="main">
				<h1 className="header">Users</h1>
				<div>
					<CardContainer users={users} loading={loading} />
					{users.length > 0 && users.length <= 100 && <Card button loadMore={this.loadUsers} />}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { loading, users, error } = state.users;
	return { loading, users, error };
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (count) => {
			dispatch(userActions.getUsers(count));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
