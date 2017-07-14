import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => (
    <div>
        <Head>
            <title>Florin's blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/journal/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/style.css" />
        </Head>
        <div className="container">
            { children }
        </div>
    </div>
);

export default Layout;
