import React, { Component } from 'react';
import Router from 'next/router';
import marked from 'marked';

import Layout from '../layout';
import { postsRef } from '../firebase';

class AddPost extends Component {
    state = {
        preview: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let { title, text } = this.refs;

        title = title.value;
        text = text.value;

        if (!title || !text) {
            return;
        }

        const created = new Date().toString();
        const slug = title.split(' ').join('-').toLowerCase();
        const excerpt = marked(text.slice(0, 200) + '...');
        text = marked(text);

        postsRef.push({
            created,
            excerpt,
            slug,
            title,
            text
        });

        Router.push('/');
    }

    handleTextChange = (e) => {
        let { text } = this.refs;

        text = text.value;

        this.setState({
            preview: marked(text)
        });
    }

    render() {
        const { preview } = this.state;

        return (
            <Layout>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Add new post</h1>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input ref="title" type="text" className="form-control" placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <textarea onChange={this.handleTextChange} ref="text" cols="30" rows="10" className="form-control" placeholder="Markdown formated text"></textarea>
                            </div>
                            <button className="btn btn-primary">Add post</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h1>Preview</h1>
                        <div ref="preview" className="preview-box" dangerouslySetInnerHTML={{ __html: preview }}/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default AddPost;
