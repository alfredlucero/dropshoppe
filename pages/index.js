// Allows you to do client-side routing without making a request to the server
// Handles all the location.history for me
import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// const RouteMaskPostLink = props => (
//   <li>
//     {/* as is the URL we show on the browser; the URL your app sees is href */}
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

const Index = props => (
  <Layout>
    {/* Link is a higher order component which only accepts "href" and other similar props */}
    {/* You need to style the underlying component if you need to style it */}
    {/* Components placed inside a Link should accept an onClick prop so the routing works */}
    {/* Creating a React component inside the pages directory and then reference fixed URL based on file name */}
    {/* <Link href="/about">
      <button>Go to About Page</button>
    </Link> */}
    {/* <p>Hello Next.js</p>
    <h1>My Blog</h1> */}
    <h1>Batman TV Shows</h1>
    <ul>
      {/* If we reload these pages, it will 404 since there is not such page on the server -> we need next custom Express server API to handle those routes */}
      {/* <RouteMaskPostLink id="hello-nextjs" title="Hello Next.js" />
      <RouteMaskPostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <RouteMaskPostLink id="deploy-nextjs" title="Deploy apps with Zeit" /> */}
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

// Static asynchronous function you can add into any page in your app to fetch data and send them as props to your page
Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  // This only outputs on the server console because we render the page on the server and already have the data and no
  // reason to fetch it again in the client
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;
