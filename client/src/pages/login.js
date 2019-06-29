import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from '../axios';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  

  doLogIn(e) {
    e.preventDefault();
    console.log('sending')
    axios.post('http://localhost:8080/api/login', {
      email: this.state.email,
      password: this.state.password
    }).then((data) => {
      console.log('got from server ', data)
      // this.props.history.push('/');
    }).catch((e) => {
      console.log(e);
      this.setState({error: 'Email and password didn\'t match'})
    });
  }
  
  handleClick = (event) => {
    console.log("this clicked");

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Login Form</h2>
          <form className="login" onSubmit={(e) => this.doLogIn(e)}>
            <div className="form-group">
              <label htmlFor="email-input">Email address</label>
              <input type="email" className="form-control" id="email-input"
                     placeholder="Email" onChange = { event => this.setState({email: event.target.value})} />
            </div>
            <div className="form-group">
              <label htmlFor="password-input">Password</label>
              <input type="password" className="form-control" id="password-input"
                     placeholder="Password" onChange = { event => this.setState({password: event.target.value})} />
            </div>
            <div style={{display: this.state.error ? 'block' : 'none'}} id="alert" className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span> <span className="msg">{this.state.error}</span>
            </div>
            <li><Link to="/"> <input type="submit" onClick={this.handleClick} class="login" value="LOGIN"/></Link></li>
          </form>
          <br/>
          <br/>
          <p>Or sign up <Link to="/signup">here</Link></p>
        </div>
      </div>
    );
  }
}

export default LogIn;
