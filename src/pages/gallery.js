import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading1 from "../components/headings/heading1"

import Gallery from "../components/gallery"
import ImageGallery from "../components/image-gallery"
const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Heading1 class="centred">Our Gallery</Heading1>

    <ImageGallery />
    {/* <Lightbox folder="images" /> */}
  </Layout>
)

export default GalleryPage
