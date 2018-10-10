import { withRouter } from "next/router";
import Layout from "../components/Layout";

const Content = withRouter(props => (
  <div>
    {/* Accessing the query params of /post?title=<...> */}
    {/* Can create dynamic pages using query strings */}
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
