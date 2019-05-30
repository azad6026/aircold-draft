import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const handleOpenLargeView = e => {
  const src = e.currentTarget.querySelector("picture img").src
  console.log(src)
  const overlay = document.querySelector(".overlay")
  console.log(overlay)
  const overlayImage = overlay.querySelector("img")
  overlayImage.src = src
  console.log(src)
  // overlayImage.src = src
  overlay.classList.add("open")
}
const handleCloseLargeView = e => {
  const overlay = document.querySelector(".overlay")
  overlay.classList.remove("open")
}
const Gallery = props => (
  <StaticQuery
    query={graphql`
      query {
        gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const path = data.gallery.edges.map(edge => (
        <>
          <div className="item" onClick={handleOpenLargeView}>
            <Image
              fluid={edge.node.childImageSharp.fluid}
              alt={edge.node.name}
            />
            <div className="item__overlay">
              <button>View →</button>
            </div>
          </div>
        </>
      ))
      return (
        <>
          <div className="overlay">
            <div className="overlay-inner">
              <button ClassName="close" onClick={handleCloseLargeView}>
                X
              </button>
              <img />
            </div>
          </div>
          <div className="gallery">{path}</div>
        </>
      )
    }}
  />
)
export default Gallery
