import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "../components/lightbox"

const ImageGallery = ({ props }) => (
  <StaticQuery
    query={graphql`
      query {
        gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox galleryImages={data.gallery.edges} />}
  />
)
export default ImageGallery
