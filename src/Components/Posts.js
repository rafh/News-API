import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

    render() {
        let posts;
        if( this.props.posts ) {
            posts = this.props.posts.map( post => {
                return (
                    <Post />
                );
            });
        }
        return (
            <div className="Posts">
                {posts}
            </div>
        );
    }
}

Posts.propTypes = {
    // todos: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default Posts;
