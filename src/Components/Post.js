import React, { Component } from 'react';
import logo from './logo.svg'

class Post extends Component {

    render() {

        // iterate through Articles array
        var articles = [];
        articles = this.props.post.articles.map( article => {

            // remove mm:ss.sTZD from date/time
            var time = article.publishedAt;
            if(time != null) {
                time = time.substring(0, 10);
                var year = time.substring(0, 4);
                var mth = time.substring(5, 7);
                var day = time.substring(8, 10);
            }


            // format month by matching value with idx of arrray
            function formatDate(mth) {
                if(mth) {
                    //remove first character if it's 0
                    if(mth.charAt(0) === '0'){
                        mth = mth.substr(1);
                    }
                    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                    return(monthNames[mth - 1])
                }else {
                    return ''
                }

            }

            var cardImg = {
                backgroundImage: `url(${article.urlToImage})`
            }

            return (
                <div key={1 + Math.random()} className="Single">
                    <a ref={this.waitForLoad} href={article.url} id="test" target="_blank" className="Single__image" style={cardImg}>
                    </a>
                    <div className="Single__content">
                        <h3>{article.title}</h3>
                        {/*check if prop: publishedAt is provided*/}
                        <span>{formatDate(mth)}{day ? '-' + day + '-' : ''}{year}</span>
                        {/*check if prop: author is provided*/}
                        <p className="Single__author"><span>By: </span><i>{article.author ? article.author : 'Anonymous'}</i></p>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" className="read-more" >Read More</a>
                    </div>
                </div>
            )
        });

        return (
            <div className="Post">
                {articles}

                <div className="attribution"><img src={logo} className="logo"/> Powered by News API</div>
            </div>
        );
    }
}

Post.propTypes = {

}

export default Post;
