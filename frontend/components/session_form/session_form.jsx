import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfSignedIn();
	}

	redirectIfSignedIn() {
		if (this.props.signedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.processForm(this.state);
	}

	navLink() {
		if (this.props.formType === "sign-in") {
			return <Link to="/sign-up">sign up instead</Link>;
		} else {
			return <Link to="/sign-in">sign in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
    if (this.props.formType === 'sign-in'){
  		return (
  			<div className="signin-form-container">
  				<form onSubmit={this.handleSubmit} className="signin-form-box">
  					Welcome back to NightStock!
  					<br/>
  					Please {this.props.formType} or {this.navLink()}
  					{this.renderErrors()}
  					<div className="signin-form">
  						<br/>
  						<label> Username:
  							<input type="text"
  								value={this.state.username}
  								onChange={this.update("username")}
  								className="signin-input" />
  						</label>
  						<br/>
  						<label> Password:
  							<input type="password"
  								value={this.state.password}
  								onChange={this.update("password")}
  								className="signin-input" />
  						</label>
  						<br/>
  						<input type="submit" value="Submit" />
  					</div>
  				</form>
  			</div>
  		);
  	} else {
      return (
  			<div className="signup-form-container">
  				<form onSubmit={this.handleSubmit} className="signup-form-box">
  					Welcome to NightStock!
  					<br />
  					Please {this.props.formType} or {this.navLink()}
  					{this.renderErrors()}
  					<div className="signup-form">
  						<br />
  						<label> Username: &nbsp;
  							<input type="text"
  								placeholder="User"
  								onChange={this.update("username")}
  								className="signup-input" />
  						</label>
  						<br />
              <label> Password: &nbsp;&nbsp;
                <input type="password"
                  placeholder="Password"
                  onChange={this.update("password")}
                  className="signup-input" />
              </label>
  						<br />
              <label> Email: &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email"
                  placeholder="Email"
                  onChange={this.update("email")}
                  className="signup-input" />
              </label>
  						<br />
              <label>
                <textarea
                  placeholder="Please enter a description about yourself"
                  onChange={this.update("description")}
                  className="signup-input" />
              </label>
              <br />
  						<input type="submit" value="Submit" />
  					</div>
  				</form>
  			</div>
  		);
    }
  }
}

export default withRouter(SessionForm);
