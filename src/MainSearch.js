import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/MainSearch.scss';
import $ from 'jquery';

class MainSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }

        this.change = this.change.bind(this);
    }

    change(event){
        this.setState({value: event.target.value});

        $.ajax({
            // url: 'https://newsapi.org/v1/source=the-next-web&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
            url: 'https://newsapi.org/v1/articles?source=' + this.state.value + '&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
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

    getNews() {
        $.ajax({
            // url: 'https://newsapi.org/v1/source=the-next-web&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
            url: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
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

    componentWillMount(){
        this.getNews();
    }

    componentDidUpdate() {
        this.change();
    }

    componentDidMount() {
        this.getNews();
    }

    render() {
        return (
            <div className="MainSearch">
                <div className="MainSearch__header">
                    <h2>It's all in one place</h2>
                    <form action="">
                        <input type="text" placeholder="Search"  className="MainSearch__input"/>
                        <input type="submit" value="Search" className="MainSearch__btn"/>
                    </form>
                    <select value={this.state.value} onChange={this.change} id="">
                        <option value="the-verge">Tech Verge</option>
                        <option value="techcrunch">Tech Crunch</option>
                        <option value="time">Time</option>
                        <option value="bbc-sport">BBC Sport</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default MainSearch;
