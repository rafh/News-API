import React, { Component } from 'react';
// import logo from './logo.svg';
import $ from 'jquery';
import Posts from './Components/Posts';
import './style/Content.scss';


class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    getNews() {
        $.ajax({
            // url: 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a',
            url: 'https://api.themoviedb.org/3/movie/112?api_key=3963cd7dc78abf65997e8ce1d3f9b148',
            dataType: 'json',
            cache: true,
            success: function(data) {
                this.setState({ posts: [data] }, function() {
                    // console.log(data.articles);
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

    componentDidMount() {
        this.getNews();
    }

    render() {
        return (
            <div className="Content">
                <Posts posts={this.state.posts.articles} />
            </div>
        );
    }
}

export default Content;
