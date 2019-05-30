import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <>
        {" "}
        <h1>My Site's Posts</h1>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <article key={index}>
              <h2>{node.frontmatter.title}</h2>
              <time>Published on : {node.frontmatter.date}</time>
              <p>{node.excerpt}</p>
              <Link to={node.fileAbsolutePath}>Read More</Link>
            </article>
          ))}
        </ul>
      </>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fileAbsolutePath
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
