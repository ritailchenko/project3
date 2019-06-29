import { Link, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import './App.css';
import Home from './pages/home';
import Dogs from './pages/dogs';
import LogIn from "./pages/login"
import Details from './pages/details';
import Signup from "./pages/signup"
import FakeDataBase from "./FakeDataBase"
import API from "./API";
import ShelterForm from "./components/Form"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: {}
    }
  }

  componentDidMount(event) {
    this.getAll();
  }

  getAll = () => {
    let tempRes = {}
    API.getAll().then(res => {
      console.log(res);
      tempRes = res;
    }).then(res => {
      this.setState({ db: res });
    }).then(res2 => {
      let shelters = tempRes.data.shelter_res;
      shelters.forEach(shelter => {
        FakeDataBase.getShelters.push(shelter.ZIPCODE)
      })
    }).finally(console.log(FakeDataBase.getShelters))
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} props={this.state.db} />
            <Route path="/Dogs" component={Dogs} props={this.state.db} />
            <Route path="/details/:dogId" component={Details} props={this.state.db} />
            <Route path="/Signin" component={LogIn} />
            <Route path="/Signup" component={Signup} />
            <Route path="/admin" component={ShelterForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;