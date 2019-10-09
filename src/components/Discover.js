import React, { Component } from "react";
import DiscoverCard from "./DiscoverCard"
import API from "../utils/discoverAPI";

//likes counter state

class Discover extends Component {
    state = {
        count: 0,
        results: ""
    }

    componentDidMount() {
        this.discoverAPI()
    }

    discoverAPI = () => {
        API.search()
            .then(res =>
                // console.log(res.data))
                this.setState({ results: res.data.message }))
            .catch(err => console.log(err))
    }

    handleLikes = () => {

        var randomNum = Math.floor(Math.random() * 5);
        console.log("randomNum: " + randomNum)
        if (randomNum === 4) {
            this.setState({ count: this.state.count + 1 })
            this.discoverAPI()
        } else {
            // alert("No match!")
            this.discoverAPI()
        }
    }

    handleDislikes = () => {
        this.discoverAPI();
    }

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header bg-primary text-white">
                        Dog Match!</div>
                    <div className="card-body">
                        <h4 className="card-text">Likes Count: {this.state.count}</h4>
                        <DiscoverCard results={this.state.results} />
                        <button className="btn btn-primary" onClick={this.handleLikes}>
                            Like</button>
                        <button className="btn btn-danger" onClick={this.handleDislikes}>
                            Dislike</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Discover;