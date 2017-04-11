import React, { Component } from 'react';
// import Articles from './Articles'

class Post extends Component {

    render() {

        // iterate through Articles array
        var articles = [];
        articles = this.props.post.articles.map( article => {

            // remove mm:ss.sTZD from date/time
            var time = article.publishedAt;
            time = time.substring(0, 10);
            var year = time.substring(0, 4);
            var mth = time.substring(5, 7);
            var day = time.substring(8, 10);

            // format month by matching value with idx of arrray
            function formatDate(mth) {
                //remove first character if it's 0
                if(mth.charAt(0) === '0'){
                    mth = mth.substr(1);
                }
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];

                return(monthNames[mth - 1])
            }

            return (
                <div key={1 + Math.random()} className="Single">
                    <a href={article.url} target="_blank" className="Single__image" style={{backgroundImage: `url(${article.urlToImage})`}}>
                    </a>
                    <div className="Single__content">
                        <h3>{article.title}</h3>
                        <span>{formatDate(mth)}-{day}-{year}</span>
                        <p className="Single__author"><span>By: </span><i>{article.author}</i></p>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" className="read-more" >Read More</a>
                    </div>
                </div>
            )
        });

        return (
            <div className="Post">
                {articles}
                <div className="attribution">Powered by News API</div>
            </div>
        );
    }
}

Post.propTypes = {

}

export default Post;
