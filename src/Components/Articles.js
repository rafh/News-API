import React, { Component } from 'react';

class Articles extends Component {

    render() {
        let articles;
        if( this.props.posts.articles ) {
            // console.log(articles);
            articles = [];
            articles = this.props.post.articles.map( article => {
                return (
                    <Articles key={articles.name} article={article.name} />
                )
            })
        }
        return (
            <p>{articles}</p>
        );
    }
}

Articles.propTypes = {
    // todos: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default Articles;
