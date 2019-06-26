import React from "react"
import Layout from "../components/layout"
import Image from "gastsby"
import SEO from "../components/seo"
import Heading1 from "../components/headings/heading1"

import Gallery from "../components/gallery"
import ImageGallery from "../components/image-gallery"
const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <section className="top-banner">
      <Image filename="house-inblue-aircon.jpg" alt="some image" />
      {/* <Paragraph className="banner-caption">ABOUT AIRCOLD</Paragraph> */}
    </section>
    <Heading1 class="centred">Our Gallery</Heading1>

    <ImageGallery />
    {/* <Lightbox folder="images" /> */}
  </Layout>
)

export default GalleryPage
