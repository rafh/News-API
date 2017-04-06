import React, { Component } from 'react';
// import Articles from './Articles'

class Post extends Component {

    render() {

        // iterate through Articles array
        var articles = [];
        var articles = this.props.post.articles.map( article => {
            // var bodyStyle = document.getElementsByClassName('Single');
            // bodyStyle.backgroundImage = {article.urlToImage};
            return (
                <div key={1 + Math.random()} className="Single">
                    <a href={article.url} target="_blank">
                        <img src={article.urlToImage} alt={article.title}/>

                    </a>
                    <div className="Single_wraper">
                        <h4>{article.title}</h4>
                        <span>{article.publishedAt} By: </span><i>{article.author}</i>
                        <p>{article.description}</p>
                    </div>
                </div>
            )
        });

        return (
            <div className="Post">
                {articles}
            </div>
        );
    }
}

Post.propTypes = {

}

export default Post;
