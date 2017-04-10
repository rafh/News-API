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
            // value: 'google-news&sortBy=top'
            value: 'polygon&sortBy=top',
        }

        this.change = this.change.bind(this);
    }

    //Ajax Request
    getNews(value) {
        var api = '016e628857dd408f8063c17dd2a631f1'
        $.ajax({
            // url: 'https://newsapi.org/v1/source=the-next-web&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
            url: 'https://newsapi.org/v1/articles?source='+ this.state.value + '&apiKey=' + api ,
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
    change(event) {
        // event.preventDefault(event.target.value);
        // this.setState({value: event.target.value});
        var value = event.target.value;

        var api = 'e8d4334db4d949959ede814fa724577a'
        $.ajax({
            // url: 'https://newsapi.org/v1/source=the-next-web&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
            url: 'https://newsapi.org/v1/articles?source='+ value + '&sortBy=latest&apiKey=' + api ,
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

    componentDidMount(value) {
        this.getNews();
    }

    render() {
        return (
            <div className="Content">
                <div className="Search">
                    <h2>It's all in one place</h2>
                    <div className="Search__wrap">
                        <select value={this.props.value} onChange={this.change}>
                            <option ref="Polygon" value="polygon&sortBy=top">Polygon</option>
                            <option value="recode&sortBy=top">Recode</option>
                            <option value="techcrunch&sortBy=top">Tech Crunch</option>
                            <option value="techradar&sortBy=top">Tech Radar</option>
                            <option value="the-next-web&sortBy=latest">TNW</option>
                            <option value="the-verge&sortBy=top">The Verge</option>
                        </select>
                    </div>
                </div>
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default Content;
