import React, { Component } from 'react';
import Articles from './Articles'

class Post extends Component {

    render() {

        // iterate through genres array
        // var articles = [];
        // var articles = this.props.post.articles.map( article => {
        //     return (
        //         <span key="">{article.name}</span>
        //     )
        // });

        // console.log(articles)

        return (
            <div className="Article">
                <Articles />
                <p>{this.props.title}</p>
            </div>
        );
    }
}

Post.propTypes = {
    todos: React.PropTypes.object,
}

export default Post;
