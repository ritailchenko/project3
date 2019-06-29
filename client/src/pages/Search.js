import React from 'react';


function SearchComponent(props) {
    console.log(props)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-1 col-md-1">
                        <select >
                            <option value="All">All</option>
                            <option value="Labrador retriever">Labrador retriever</option>
                            <option value="German shepherd">German shepherd</option>
                            <option value="Golden retriever">Golden retriever</option>
                            <option value="French bulldog">French bulldog</option>
                            <option value="Bulldog">Bulldog</option>
                            <option value="Beagle">Beagle</option>
                            <option value="Poodle">Poodle</option>
                            <option value="Rottweilers">Rottweilers</option>
                            <option value="Yorkshire terrier">Yorkshire terrier</option>
                            <option value="German shorthaired pointer">German shorthaired pointer</option>
                        </select>
                    </div>
                    <div className="col-10 col-md-10">
                        <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-1 col-md-1">
                        <div className="input-group-append">
                            <button type="search" className="input-group-text amber lighten-3" id="basic-text1"><span className="glyphicon glyphicon-search"
                                aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            );
}
export default SearchComponent;
