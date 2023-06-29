
// import './App.css';
// import Header from './Header';
// import Profils from './Profils';
// import Experiences from './Experiences';
// import Footer from './Footer';
// import PostsFeed from 'PostsFeed';

// const PostsFeed = ({ posts }) => {
//   return (
//     <div>
//       <h2>Flux de publications</h2>
//       {posts.map((post) => {
//         if (post.isPublished) {
//           return (
//             <div key={post.id} className="post">
//               <h3>{post.title}</h3>
//               <p>{post.description}</p>
//               <img src={post.image} alt="Post" />
//               <p>Publié le {post.publishedAt}</p>
//               <p>Auteur : {post.author.firstName} {post.author.lastName}</p>
//             </div>
//           );
//         } else {
//           return null; // Ne pas afficher les publications non publiées
//         }
//       })}
//     </div>
//   );
// };

// export default PostsFeed;


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Profils />
//       <Experiences />
//       <Footer />
//       <PostsFeed />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Header from './Header';
// import Profils from './Profils';
// import Experiences from './Experiences';
// import PostsFeed from './PostsFeed';
// import Footer from './Footer';


// const postsFeedFromFakeApi = [
//   {
//     id: 1,
//     title: "Vous ne devinerez jamais ce qui s'est passé",
//     description: "Blablabla bla bla bla bla bla bla bla bla",
//     image: "https://picsum.photos/200/300",
//     isPublished: true,
//     publishedAt: "2021-09-01T12:00:00.000Z",
//     author: {
//       id: 1,
//       firstName: "John",
//       lastName: "Doe",
//     },
//   },

// ];

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Profils />
//       <Experiences />
//       <PostsFeed posts={postsFeedFromFakeApi} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './Header';
import Profils from './Profils';
import Experiences from './Experiences';
import PostsFeed from './PostsFeed';
import Footer from './Footer';

const postsFeedFromFakeApi = [
  {
    id: 1,
    title: "Vous ne devinerez jamais ce qui s'est passé",
    description: "Blablabla bla bla bla bla bla bla bla bla",
    image: "https://picsum.photos/200/300",
    isPublished: true,
    publishedAt: "2021-09-01T12:00:00.000Z",
    author: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
    },
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <Profils />
      <Experiences />
      <PostsFeed posts={postsFeedFromFakeApi} />
      <Footer />
    </div>
  );
};

export default App;

