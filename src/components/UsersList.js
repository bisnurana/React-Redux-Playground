import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUser() {
    return this.props.users.map(user => <li key={user._id}>{user.name}</li>);
  }

  render() {
    return (<div>
          <h2>User Lists</h2>
          <ul>{this.renderUser()}</ul>
                </div>
    );
  }
}
function mapStateToProps({ users, ui }) {
  return { users, ui };
}
export default connect(mapStateToProps, { fetchUsers })(UsersList);
