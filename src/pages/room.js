import React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"
import Header from "../components/header"

const Room = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
      <p>123</p>
    )
}

export default Room

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`