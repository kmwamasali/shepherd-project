import Layout from "../Layout";

function NoMatchPage(): JSX.Element {
  return(
    <Layout pageTitle="404 Not Found">
      <h2>The page you're looking for does not exist</h2>
    </Layout>
  )
}

export default NoMatchPage;