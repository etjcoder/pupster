import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult"


class Search extends Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount(){
        this.searchAPI("bulldog")
    }

    searchAPI = query => {
        API.search(query)
        .then(res=> 
            // console.log(res.data))
            this.setState({results: res.data.message}))
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
      
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchAPI(this.state.search);
    };

    render(){
        return(
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <SearchResult results={this.state.results}/>
            </div>
        );
    };
}

export default Search;