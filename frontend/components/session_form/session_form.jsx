import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '7px',
    color                 : 'white',
    backgroundColor       : 'rgba(0, 0, 0, 0.6)',
    width                 : '225px',
    height                : '300px',
    display               : 'flex',
    flexDirection         : 'column',
    textAlign             : 'center',
    justifyContent        : 'space-between',
    padding               : '20px',
  }
};


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
    this.loadDemoUser = this.loadDemoUser.bind(this);
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

    this.props.clearErrors();
	}

	navLink() {
		if (this.state.modalType === "sign-in") {
			return (
        <button onClick={this.openModal.bind(this, 'sign-up')}>
          Sign-Up Now!
        </button>
      );
		} else {
			return (
        <button onClick={this.openModal.bind(this, 'sign-in')}>
          Sign-In Instead!
        </button>
      );
		}
	}

  openModal(modalType) {
    this.setState({
      modalOpen: true,
      modalType
    });
    this.props.clearErrors();
  }

  closeModal() {
    this.setState({modalOpen: false});
    this.props.clearErrors();
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

  loadDemoUser(e){
    e.preventDefault();
    this.props.loadDemo();
  }


	render() {
		return (
      <div >
				<nav className="sign-in-sign-up">
					<button className="sign-in-b" onClick={this.openModal.bind(this, 'sign-in')}>Sign-In</button>

					<button className="sign-up-b" onClick={this.openModal.bind(this, 'sign-up')}>Sign-Up</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={customStyles}>

          <h3>
            Welcome to NightStock!
          </h3>

          <form onSubmit={this.handleSubmit} >
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
              <button onClick={(e) => this.loadDemoUser(e)}>Demo</button>
						</div>
					</form>
          <div className="nav-button">
            {this.navLink()}
          </div>
          <br />
          <div className="errors-box">
            {this.renderErrors()}
          </div>
				</Modal>
			</div>
		);
	}
}


export default withRouter(SessionForm);
