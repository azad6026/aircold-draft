import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <p>Welcome to About Us</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export default AboutPage
