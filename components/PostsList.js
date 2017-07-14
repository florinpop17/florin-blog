import React, { Component } from 'react';
import Link from 'next/link';

import { postsRef } from '../firebase';

class PostsList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {

        postsRef.on('value', snapshot => {
            const posts = [];

            snapshot.forEach(post => {
                posts.push({
                    id: post.key,
                    ...post.val()
                });
            });

            console.log(posts);

            this.setState({
                posts
            });
        });
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="mt10">
                { posts.length > 0 ? (
                    posts.map(post => (
                        <div className="panel panel-primary" key={ post.id }>
                            <div className="panel-heading">
                                { post.title }
                            </div>
                            <div className="panel-body">
                                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                <Link href={ `/post?id=${post.id}` }>
                                    <a>Read more...</a>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : 'No posts' }
            </div>
        );
    }
}

export default PostsList;
