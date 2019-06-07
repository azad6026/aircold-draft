import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Paragraph from "../components/paragraph"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Paragraph>Welcome to our Contact></Paragraph>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export default ContactPage
