import React from "react"
import Layout from "../components/layout"
import Heading1 from "../components/headings/heading1"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Heading1>Welcome to About Us</Heading1>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export default AboutPage
