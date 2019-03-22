import React, { Component } from 'react';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const Text = isAuthenticated() ? <p>You are Logged</p> : <p>You are NOT Logged</p>;
    const Button = isAuthenticated() ? <button onClick={this.logout.bind(this)}>Log Out</button> : <button onClick={this.login.bind(this)}>Log In</button>
    return (
      <div>
        <nav>
          {Button}
        </nav>
        {Text}
      </div>
    );
  }
}

export default App;
