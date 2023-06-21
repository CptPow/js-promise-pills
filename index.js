import requestHttp from "./moduls/XMLHttpRequest.js";

// //Esercizio 1

// function request (type, url) {
//     return new Promise((resolve, reject) => {
//         requestHttp(type, url, resolve, reject)
//     })
// };

// request("GET", "https://jsonplaceholder.typicode.com/posts")
// .then((resultPosts) => {
//     const postsArray = JSON.parse(resultPosts);
//     console.log(`Post ${postsArray[1].id}: ${postsArray[1].title}`);
//     return request("GET", "https://jsonplaceholder.typicode.com/comments")
// })
// .then((resultComments) => {
//     const commentsArray = JSON.parse(resultComments);
//     console.log(`Comment${commentsArray[40].id}: ${commentsArray[40].name}`);
// }).catch((err) => {
//     console.dir(err +" "+ "Errore")
// });


// //Esercizio 2
// const post = request("GET", "https://jsonplaceholder.typicode.com/posts");
// const comment = request("GET", "https://jsonplaceholder.typicode.com/comments");

// Promise.all([post, comment])
// .then((responses) => {
//     responses.forEach(resp => {
//         console.log(resp);
//     });
// }).catch((err) => {
//     console.log(err + " "+ "promise all");
// });

//Esercizio 3
//posts
// const postsFetch = fetch("https://jsonplaceholder.typicode.com/posts");
// //comments
// const commentsFetch = fetch("https://jsonplaceholder.typicode.com/comments");

// //promise all
// Promise.all([postsFetch, commentsFetch])
// .then((responses) => {
//     const post = responses[0];
//     const comment = responses[1]
//     return Promise.all([post.json(), comment.json()])
// }).then((data) => {
//   const post1 = data[0];
//   const comment1 = data[1];
//   console.log(post1);
//   console.log(comment1);
// }).catch((err) => {
//   console.log(err);
// })


//esercizio 4
//posts
// async function getPosts () {
//   const postsJSON = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = postsJSON.json();
//   return posts;
// };
// getPosts().then(posts => console.log(posts));
// //comments
// async function getComments () {
//   const commentsJSON = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const comments = commentsJSON.json();
//   return comments;
// };
// getComments().then(comments => console.log(comments));
