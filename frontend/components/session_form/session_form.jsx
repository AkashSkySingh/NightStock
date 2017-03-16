import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      username: "",
      password: "",
      modalOpen: false,
      modalType: 'sign-in'
    };
		this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

    if (this.state.modalType === 'sign-in') {
      this.props.signin(this.state);
    } else {
      this.props.signup(this.state);
    }
	}

	navLink() {
		if (this.state.modalType === "sign-in") {
			return (
        <button onClick={this.openModal.bind(this, 'sign-up')}>
          Sign-Up!
        </button>
      );
		} else {
			return (
        <button onClick={this.openModal.bind(this, 'sign-in')}>
          Sign-In!
        </button>
      );
		}
	}

  openModal(modalType) {
    this.setState({
      modalOpen: true,
      modalType
    });
  }

  closeModal() {
    this.setState({modalOpen: false});
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
		return (
      <div >
				<nav className="sign-in-sign-up">
					<button onClick={this.openModal.bind(this, 'sign-in')}>Sign In!</button>

					<button onClick={this.openModal.bind(this, 'sign-up')}>Sign up!</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>

					Welcome back to NightStock!
					<br/>
					{this.renderErrors()}
          <form onSubmit={this.handleSubmit} >
						{this.renderErrors()}
						<div className="sign-form">
							<br/>
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="sign-input" />
							</label>
							<br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="sign-input" />
							</label>
							<br/>
							<input type="submit" value="Submit" />
						</div>
					</form>
          {this.navLink()}
				</Modal>
			</div>
		);
	}
}


export default withRouter(SessionForm);
