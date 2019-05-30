import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <p>Welcome to our Gallery</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export default GalleryPage
