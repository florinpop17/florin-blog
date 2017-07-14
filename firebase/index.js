import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBvaSAYdJRN2QAp0OSMqW9nz20kYJ2029w",
    authDomain: "florin-blog.firebaseapp.com",
    databaseURL: "https://florin-blog.firebaseio.com",
    projectId: "florin-blog",
    storageBucket: "florin-blog.appspot.com",
    messagingSenderId: "347951745075"
};

try {
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

const postsRef = firebase.database().ref('posts');

export { postsRef };

export default firebase;
