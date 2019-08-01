import React from "react";
import { Route, Link } from "react-router-dom";

const UserId = ({ match, location }) => {
  return (
    <div>
      <div>location.pathname : {location.pathname}</div>
      <div>match.path : {match.path}</div>
      <div>match.url : {match.url}</div>
      <div>match.params.id : {match.params.id}</div>
    </div>
  );
};

class Users extends React.Component {
  render() {
    console.log(this.props);
    //const { params } = this.props.match;
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/users/1">User 1 </Link>
          </li>
          <li>
            <Link to="/users/2">User 2 </Link>
          </li>
          <li>
            <Link to="/users/3">User 3 </Link>
          </li>
        </ul>
        <Route path="/users/:id" component={UserId} />
      </div>
    );
  }
}

export default Users;
