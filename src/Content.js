import React, { Component } from 'react';
// import logo from './logo.svg';
import $ from 'jquery';
import Posts from './Components/Posts';
// import MainSearch from './MainSearch';
import './style/Content.scss';


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            value: 'the-verge'
        }

        this.change = this.change.bind(this);
    }

    //Ajax Request
    getNews(value) {
        var api = 'e8d4334db4d949959ede814fa724577a'
        $.ajax({
            // url: 'https://newsapi.org/v1/source=the-next-web&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
            url: 'https://newsapi.org/v1/articles?source='+ this.state.value + '&sortBy=latest&apiKey=' + api ,
            dataType: 'json',
            cache: true,
            success: function(data) {
                this.setState({ posts: [data] }, function() {
                    console.log(data);
                })
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        })
    }

    // Change the request depending on selected option
    change(event, value) {
        event.preventDefault(event.target.value);
        this.setState({value: event.target.value});
        this.getNews();
    }

    componentWillMount() {
        this.getNews();
    }

    componentWillReceiveProps() {
        this.change();
    }

    render() {
        return (
            <div className="Content">
                <div className="Search">
                    <h2>It's all in one place</h2>
                    <div className="Search__wrap">
                        <select value={this.state.value} onChange={this.change}>
                            <option defaultValue value="the-verge">Tech Verge</option>
                            <option value="techcrunch">Tech Crunch</option>
                            <option value="time">Time</option>
                            <option value="bbc-sport">BBC Sport</option>
                            <option value="buzzfeed">BuzzFeed</option>
                        </select>
                    </div>
                </div>
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default Content;
