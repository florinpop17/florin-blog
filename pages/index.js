import React, { Component } from 'react';
import Link from 'next/link';

import Layout from '../layout';
import { PostsList } from '../components';

class BlogIndex extends Component {
    render() {
        return (
            <Layout>
                <div className="jumbotron text-center">
                    <h1>Welcome to Florin's blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nobis sequi dicta libero tenetur, laborum officia molestias eius, eaque, ipsum at tempore veniam, odit necessitatibus rerum totam expedita nulla porro!</p>
                </div>
                <Link href="/add-post">
                    <button className="btn btn-primary">Add new post</button>
                </Link>
                <PostsList />
            </Layout>
        );
    }
}

export default BlogIndex;
