// Allows you to do client-side routing without making a request to the server
// Handles all the location.history for me
import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const RouteMaskPostLink = props => (
  <li>
    {/* as is the URL we show on the browser; the URL your app sees is href */}
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    {/* Link is a higher order component which only accepts "href" and other similar props */}
    {/* You need to style the underlying component if you need to style it */}
    {/* Components placed inside a Link should accept an onClick prop so the routing works */}
    {/* Creating a React component inside the pages directory and then reference fixed URL based on file name */}
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
    <h1>My Blog</h1>
    <ul>
      {/* If we reload these pages, it will 404 since there is not such page on the server -> we need next custom Express server API */}
      <RouteMaskPostLink id="hello-nextjs" title="Hello Next.js" />
      <RouteMaskPostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <RouteMaskPostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
