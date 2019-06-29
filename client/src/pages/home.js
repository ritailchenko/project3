import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import API from "../API";
import SearchComponent from "../components/Search/search";
//import Axios from "axios";
//import Fetch from "../components/fetch"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: {}
    }
  }

  componentDidMount(event) {
    this.getAll()
  }

  getAll = () => {
    API.getAll().then(res => {
      console.log(res);
    }).then(res =>{
        this.setState({db:res});
    })
  }

  

  render() {
    return (
      <div className="home-page">
        <div className="myHeader">
          <h1>{this.props.children}</h1>
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent></SearchComponent>
        </div>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Home;