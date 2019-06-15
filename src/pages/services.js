import React from "react"
import { Link } from "gatsby"
import Heading1 from "../components/headings/heading1"

import Layout from "../components/layout"
import Pragraph from "../components/paragraph"
import Image from "../components/image"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1 style={{ textAlign: "center", margin: "2rem auto" }}>Our Services</h1>
    <Pragraph>Here is a list of our services</Pragraph>
  </Layout>
)

export default ServicesPage
