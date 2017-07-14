import React, { Component } from 'react';
import Link from 'next/link';

import { postsRef } from '../firebase';
import Layout from '../layout';

class Post extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        const { id } = this.props.url.query;
        const singlePostRef = postsRef.child(id);

        singlePostRef.once('value', (snap) => {
            this.setState({
                post: snap.val()
            })
        });
    }

    render() {
        const { post } = this.state;

        return (
            <Layout>
                <h2>{ post.title } <small>Created at: { new Date(post.created).toLocaleString() }</small></h2>

                <div dangerouslySetInnerHTML={{ __html: post.text }} />
                <Link href={'/'}>
                    <button className="btn btn-primary">Go back</button>
                </Link>
            </Layout>
        );
    }
}

export default Post;
