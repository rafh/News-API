import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

    render() {
        let posts;
        if( this.props.posts ) {
            posts = this.props.posts.map( post => {
                return (
                    <Post key="" post={ post }/>
                );
            });
        }

        console.log(this.props.posts)

        return (
            <div className="Posts">
                {posts}
            </div>
        );
    }
}

Posts.propTypes = {

}

export default Posts;
