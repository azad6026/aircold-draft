import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    {/* <Title wight="1">Welcome to About Us</Title> */}
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export default AboutPage
