// import { withRouter } from "next/router";
// import Layout from "../components/Layout";

// const Content = withRouter(props => (
//   <div>
//     {/* Accessing the query params of /post?title=<...> */}
//     {/* Can create dynamic pages using query strings */}
//     <h1>{props.router.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </div>
// ));

// const Page = props => (
//   <Layout>
//     <Content />
//   </Layout>
// );

// export default Page;

import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  // Getting the id query param to fetch the show data from the API
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // This goes to the browser console because we navigated to the post page via the client side
  // and then fetching data from the client side is the best way to do it
  // If we go straight to /p/:id -> it will be outputted to the server and not on the client
  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
