
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip:0,
            click:0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) =>{
        this.setState = {
            zip: event.target.value
        }
        console.log(this.state.click)
    }

    handleClick = (event) => {
        this.setState = {
            click: this.state.zip
        }
        console.log(this.state.click);
    }

    render() {
        return (
            <div>
                <div className="search-container">
                <h1>{this.props.children}</h1>
                {this.state.text}
                    <p>Find buddies in your neighborhood</p>
                </div>
                <div className="search-box">
                    <InputGroup className="mb-3">
                        <i className="fas fa-map-marker-alt icon" aria-hidden="true"></i>
                        <FormControl onChange={this.handleChange} className="input"
                            placeholder="zip code"
                            aria-label="zip code"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button onClick={this.handleClick} className="search-button" variant="outline-secondary" onClick={this.handleClick}><i className="fa fa-search"></i></Button>
                        </InputGroup.Append>                        

                    </InputGroup>
                </div>
                </div>
                )
            }

    handleClick() {
        this.props.history.push('/dogs');
    }

}

export default withRouter(SearchComponent);


