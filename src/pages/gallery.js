import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <h1>Welcome to our Gallery</h1>
    <Gallery />
  </Layout>
)

export default GalleryPage
